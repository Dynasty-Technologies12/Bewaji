const mychart = document.getElementById("budget-details").getContext("2d");

const labels = ["Entertainment", "Bills", "Dining Out", "Personal Care"];
const values = [50, 750, 75, 100];
const colors = ["#287c76", "#81c9d7", "#f1cdab", "#625f70"];

const chart = new Chart(mychart, {
    type: "doughnut",
    data: {
        labels: labels,
        datasets: [{
            backgroundColor: colors,
            data: values
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false, 
            },
            title: {
                display: true,
                font: {
                }
            }
        },
        responsive: true,
        maintainAspectRatio: false,
        cutout: "65%", 
    },
    plugins: [{
        id: 'centerTextPlugin',
        beforeDraw: function (chart) {
            const { width, height, ctx } = chart;
            ctx.restore();

            // Bold "$338"
            ctx.font = "bold 28px sans-serif";
            ctx.fillStyle = "#000";
            ctx.textBaseline = "middle";
            ctx.textAlign = "center";
            ctx.fillText("$338", width / 2, height / 2);

            
            ctx.font = "16px sans-serif";
            ctx.fillStyle = "gray";
            ctx.fillText("of $965 limit", width / 2, height / 2 + 35);

            ctx.save();
        }
    }]
});

// Add a custom legend beside the chart
const legendContainer = document.createElement("div");
legendContainer.style.display = "flex";
legendContainer.style.flexDirection = "column";
legendContainer.style.justifyContent = "center"; 
legendContainer.style.fontSize = "18px"; 
legendContainer.style.fontStyle = 'sans-serif';
legendContainer.style.marginLeft = "-12rem"; 
legendContainer.style.marginTop = '40px';

labels.forEach((label, index) => {
    const legendItem = document.createElement("div");
    legendItem.style.display = "flex";
    legendItem.style.alignItems = "center";
    legendItem.style.marginBottom = "15px"; 

// Create the color indicator (thin vertical bar)
const colorBox = document.createElement("div");
colorBox.style.width = "5px";  
colorBox.style.height = "50px";  
colorBox.style.backgroundColor = colors[index];
colorBox.style.marginRight = "15px";  
colorBox.style.borderRadius = "5px";  


    // Create label container (aligns text and amount)
    const textContainer = document.createElement("div");
    textContainer.style.display = "flex";
    textContainer.style.flexDirection = "column";
    textContainer.style.alignItems = "flex-start";

    // Label (span)
    const textLabel = document.createElement("span");
    textLabel.textContent = label;
    textLabel.style.fontWeight = "bold";
    
    // Amount (under the label)
    const textAmount = document.createElement("span");
    textAmount.textContent = `$${values[index].toFixed(2)}`;
    textAmount.style.color = "gray";  

    textContainer.appendChild(textLabel);
    textContainer.appendChild(textAmount);

    legendItem.appendChild(colorBox);
    legendItem.appendChild(textContainer);
    legendContainer.appendChild(legendItem);
});

// Append the legend beside the chart
document.querySelector(".budgets").appendChild(legendContainer);

document.getElementById("close-menu").addEventListener("click", function () {
    let menu = document.querySelector(".menu-page");
    menu.classList.toggle("hidden-menu");
});

document.getElementById("start-menu").addEventListener("click", function () {
    document.querySelector(".menu-page").classList.remove("hidden-menu");
});
