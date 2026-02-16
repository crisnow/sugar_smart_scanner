const foodDB = {
    "chocolate cake": {
        sugar: "High",
        alternatives: ["Fruit Tart", "Greek Yogurt with Berries", "Dark Chocolate"],
        sugarLevel: 5
    },
    "soda": {
        sugar: "High",
        alternatives: ["Sparkling Water with Fruit", "Lightly Sweetened Tea", "Kombucha"],
        sugarLevel: 5
    },
    "white bread": {
        sugar: "Medium",
        alternatives: ["Whole Grain Bread", "Sprouted Grain Toast"],
        sugarLevel: 3
    },
    "ice cream": {
        sugar: "High",
        alternatives: ["Frozen Banana", "Greek Yogurt Pops", "Sorbet"],
        sugarLevel: 5
    }
};

document.getElementById("checkBtn").addEventListener("click", checkFood);

async function checkFood() {
    const input = document.getElementById("foodInput").value.toLowerCase().trim();
    const resultDiv = document.getElementById("result");

    if (!input) return;

    resultDiv.innerHTML = `<p>Loading suggestions...</p>`;

    let data = foodDB[input];

    if (!data) {
        data = await getGenAIAlternatives(input);
    }

    displayResult(input, data);
}

function displayResult(foodName, data) {
    const resultDiv = document.getElementById("result");
    const sugarLevel = data.sugarLevel || 3;
    const sugarImpact = data.sugar || "Medium";

    const barWidth = (sugarLevel / 5) * 100;
    const icons = "🍬".repeat(sugarLevel);

    resultDiv.innerHTML = `
        <div class="result ${sugarImpact.toLowerCase()}">
            <h3>Suggestions for ${capitalize(foodName)}</h3>
            <p>Estimated sugar impact: <strong>${sugarImpact}</strong></p>

            <div class="bar-container">
                <div class="bar-fill" 
                     style="width:${barWidth}%; background-color:${getBarColor(sugarLevel)}">
                </div>
            </div>

            <p>${icons}</p>
            <p>You might also enjoy these similar options:</p>
            <ul>
                ${data.alternatives.map(item => `<li>${item}</li>`).join("")}
            </ul>
        </div>
    `;
}

function capitalize(str) {
    return str.replace(/\b\w/g, c => c.toUpperCase());
}

function getBarColor(level) {
    if (level <= 2) return "#28a745";
    if (level <= 4) return "#ffc107";
    return "#dc3545";
}

// -------- GenAI Function --------
async function getGenAIAlternatives(foodName) {
    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer YOUR_OPENAI_API_KEY"
            },
            body: JSON.stringify({
                model: "gpt-4.1-mini",
                messages: [
                    {
                        role: "system",
                        content: "You suggest neutral food alternatives based on sugar content. Do not give medical advice."
                    },
                    {
                        role: "user",
                        content: `Suggest 3 neutral alternatives to "${foodName}" that are similar in category but may have lower sugar impact. Just return the food names.`
                    }
                ]
            })
        });

        const data = await response.json();
        let text = data.choices[0].message.content;

        const alternatives = text
            .split(/,|\n|•/)
            .map(s => s.trim())
            .filter(s => s);

        return { sugar: "Medium", sugarLevel: 3, alternatives };

    } catch (err) {
        console.error(err);
        return {
            sugar: "Medium",
            sugarLevel: 3,
            alternatives: ["No suggestions available"]
        };
    }
}