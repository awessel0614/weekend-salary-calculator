


console.log('Hello, world!');

let totalMonthly = 0;

function addEmployee(event){
    event.preventDefault();

    let firstName = document.querySelector(`#first-name`).value;
    let lastName = document.querySelector(`#last-name`).value;
    let idNumber = document.querySelector(`#id-number`).value;
    let jobTitle = document.querySelector(`#job-title`).value;
    let annualSalary = document.querySelector(`#annual-salary`).value;
    
    totalMonthly = totalMonthly + (Number(annualSalary)/12);

    let employeeList = document.querySelector(`#employee-list`);
    employeeList.innerHTML += `
        <tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${idNumber}</td>
            <td>${jobTitle}</td>
            <td>${annualSalary}</td> 
            <td><button class='remove-employee' onClick='removeEmployee(event)'>Delete</button></td>
        </tr>
    `;

    let totalMonthlySection = document.querySelector(`#total-monthly`);
    totalMonthlySection.innerHTML = `
    <h3>${totalMonthly}</h3>

    `;
}

function removeEmployee(event){
    event.target.parentElement.parentElement.remove();

}


