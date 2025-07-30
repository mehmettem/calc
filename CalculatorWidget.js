define('MyCompany/CalculatorWidget', [
    'UWA/Core',
    'UWA/Class/View'
], function (UWA, View) {
    'use strict';

    var CalculatorWidget = View.extend({
        tagName: 'div',
        className: 'calculator-widget',
        setup: function () {
            this.injectContent();
        },
        injectContent: function () {
            var container = UWA.createElement('div', {
                html: `
                    <h2 style="color:#2276c3;">Calculator Widget</h2>
                    <input type="number" id="num1" placeholder="First number" style="width:90px;" />&nbsp;
                    <select id="operator">
                        <option value="+">+</option>
                        <option value="-">-</option>
                        <option value="*">*</option>
                        <option value="/">/</option>
                    </select>&nbsp;
                    <input type="number" id="num2" placeholder="Second number" style="width:90px;" />&nbsp;
                    <button id="calcBtn">=</button>
                    <div style="margin-top:15px;">
                        <strong>Result: </strong>
                        <span id="result"></span>
                    </div>
                `
            });
            this.container.setContent(container);

            // Event Handler
            container.querySelector('#calcBtn').addEventListener('click', function() {
                var num1 = parseFloat(container.querySelector('#num1').value);
                var num2 = parseFloat(container.querySelector('#num2').value);
                var op = container.querySelector('#operator').value;
                var result;
                if (isNaN(num1) || isNaN(num2)) {
                    result = "Please enter valid numbers.";
                } else {
                    switch(op) {
                        case '+':
                            result = num1 + num2;
                            break;
                        case '-':
                            result = num1 - num2;
                            break;
                        case '*':
                            result = num1 * num2;
                            break;
                        case '/':
                            result = num2 !== 0 ? num1 / num2 : "Error: Divide by zero";
                            break;
                    }
                }
                container.querySelector('#result').innerText = result;
            });
        }
    });

    return CalculatorWidget;
});
