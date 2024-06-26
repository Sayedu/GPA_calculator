document.addEventListener('DOMContentLoaded', function() {
    
    function addRow() {
        let table = document.getElementById('data-table').getElementsByTagName('tbody')[0];
        let newRow = table.insertRow();

        let cell1 = newRow.insertCell(0);
        let cell2 = newRow.insertCell(1);
        let cell3 = newRow.insertCell(2);
        let cell4 = newRow.insertCell(3);

        cell1.innerHTML = '<input type="text" name="name[]">';
        cell2.innerHTML = '<select name="grade[]" required>' +
                          '<option value="4.0">A</option>' +
                          '<option value="3.5">B+</option>' +
                          '<option value="3.0">B</option>' +
                          '<option value="2.5">C+</option>' +
                          '<option value="2.0">C</option>' +
                          '<option value="1.0">D</option>' +
                          '<option value="0.0">F</option>' +
                          '</select>';
        cell3.innerHTML = '<input type="number" name="credit[]" required>';
        cell4.innerHTML = '<button type="button" class="remove-row">Remove</button>';

        // Attach event listener to the new remove button
        newRow.querySelector('.remove-row').addEventListener('click', function() {
            let row = this.closest('tr');
            row.parentNode.removeChild(row);
        });
    }

    // Attach event listener to the "Add Row" button
    document.getElementById('add-row').addEventListener('click', addRow);

    // Attach event listener to all existing remove buttons
    document.querySelectorAll('.remove-row').forEach(button => {
        button.addEventListener('click', function() {
            let row = this.closest('tr');
            row.parentNode.removeChild(row);
        });
    });

    // Function to calculate GPA
    function calculateGPA() {
        let grades = document.getElementsByName('grade[]');
        let credits = document.getElementsByName('credit[]');
        let totalPoints = 0;
        let totalCredits = 0;

        for (let i = 0; i < grades.length; i++) {
            let grade = parseFloat(grades[i].value);
            let credit = parseFloat(credits[i].value);
            totalPoints += grade * credit;
            totalCredits += credit;
        }

        let gpa = totalPoints / totalCredits;
        document.getElementById('gpa-display').innerText = `Your GPA is ${gpa.toFixed(2)}`;
    }

    // Attach event listener to the form submission
    document.getElementById('gpa-form').addEventListener('submit', function(event) {
        event.preventDefault();
        calculateGPA();
    });

    function resetForm() {
        let table = document.getElementById('data-table').getElementsByTagName('tbody')[0];
        table.innerHTML = '';
        let initialRow = table.insertRow();

        let cell1 = initialRow.insertCell(0);
        let cell2 = initialRow.insertCell(1);
        let cell3 = initialRow.insertCell(2);
        let cell4 = initialRow.insertCell(3);

        cell1.innerHTML = '<input type="text" name="name[]">';
        cell2.innerHTML = '<select name="grade[]" required>' +
                          '<option value="4.0">A</option>' +
                          '<option value="3.5">B+</option>' +
                          '<option value="3.0">B</option>' +
                          '<option value="2.5">C+</option>' +
                          '<option value="2.0">C</option>' +
                          '<option value="1.0">D</option>' +
                          '<option value="0.0">F</option>' +
                          '</select>';
        cell3.innerHTML = '<input type="number" name="credit[]" required>';
        cell4.innerHTML = '<button type="button" class="remove-row">Remove</button>';

        // Attach event listener to the remove button of the initial row
        initialRow.querySelector('.remove-row').addEventListener('click', function() {
            let row = this.closest('tr');
            row.parentNode.removeChild(row);
        });

        document.getElementById('gpa-display').innerText = '';
    }

    // Attach event listener to the "Reset" button
    document.getElementById('reset-form').addEventListener('click', resetForm);
});