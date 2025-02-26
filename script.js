function calculatePrice() {
    let wholesalePrice = parseFloat(document.getElementById("wholesalePrice").value);
    
    if (isNaN(wholesalePrice) || wholesalePrice < 0) {
        document.getElementById("result").innerHTML = "<p style='color: red;'>Please enter a valid price.</p>";
        return;
    }

    let gst = wholesalePrice * 0.10; // 10% GST
    let shipping = 30; // Fixed shipping cost

    // Adjusted profit margin to be the greater of 40% or a minimum of $200
    let profit = Math.max(wholesalePrice * 0.40, 200);

    let retailPrice = wholesalePrice + gst + shipping + profit;

    // Round to nearest 5
    let roundedRetailPrice = Math.round(retailPrice / 5) * 5;

    document.getElementById("result").innerHTML = `
        <p><strong>Wholesale Price:</strong> $${wholesalePrice.toFixed(2)}</p>
        <p><strong>GST (10%):</strong> $${gst.toFixed(2)}</p>
        <p><strong>Shipping Cost:</strong> $${shipping.toFixed(2)}</p>
        <p><strong>Profit (40% or min $200):</strong> $${profit.toFixed(2)}</p>
        <p><strong>Retail Price before rounding:</strong> $${retailPrice.toFixed(2)}</p>
        <h2><strong>Final Retail Price:</strong> $${roundedRetailPrice.toFixed(2)}</h2>
    `;
}
