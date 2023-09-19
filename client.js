


console.log('Hello, world!');


function addEmployee(event){
    event.preventDefault();


    let firstName = document.querySelector(`#first-name`).value;
    let lastName = document.querySelector(`#last-name`).value;
    let idNumber = document.querySelector(`#id-number`).value;
    let jobTitle = document.querySelector(`#job-title`).value;
    let annualSalary = document.querySelector(`#annual-salary`).value;

    let employeeList = document.querySelector(`#employee-list`);

    employeeList.innerHTML += `
        <tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${idNumber}</td>
            <td>${jobTitle}</td>
            <td>${annualSalary}</td>
        </tr>
    
    
    `;

}
