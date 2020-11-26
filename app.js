const name = document.querySelector('#name');
const roll = document.querySelector('#roll');
const clas = document.querySelector('#class');
const age = document.querySelector('#age');
const btn = document.querySelector('.btn');
const studentList = document.querySelector('#student-list');

btn.addEventListener('click', function(event){
    event.preventDefault();
    if(name.value == '' && roll.value == '' && clas.value == '' && age.value == ''){
        alert('Pleace Enter Your Inforamtion');
    }else{
        const addRow = document.createElement('tr');

        /**
         * Add Student Name
         */
        const newName = document.createElement('td');
        newName.innerHTML = name.value;
        console.log(newName);
        addRow.appendChild(newName);

        /**
         * Add Student Roll
         */
        const newRoll = document.createElement('td');
        newRoll.innerHTML = roll.value;
        addRow.appendChild(newRoll);

        /**
         * Add Student Class
         */
        const newCls = document.createElement('td');
        newCls.innerHTML = clas.value;
        addRow.appendChild(newCls);

        /**
         * Add Student Age
         */
        const newAge = document.createElement('td');
        newAge.innerHTML = age.value;
        addRow.appendChild(newAge);

        studentList.appendChild(addRow);
    }

});