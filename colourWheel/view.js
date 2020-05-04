
function show() {

    svgInnerHtml.innerHTML = `

        <svg width="120" height="100">
            <rect width="100" height="100" style= "${colorSquareOne}" />
        </svg>

        <svg width="160" height="100">
            <rect width="100" height="100" style= "${colorSquareTwo}" />
        </svg>

        <svg id="outputSvg" width="300" height="100">
        <rect width="100" height="100" style= "${resultColor}" />
        </svg>

        `;
}
show();