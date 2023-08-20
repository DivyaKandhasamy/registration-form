let div=document.createElement('div');
div.classList.add('profile-section');
let maindiv=document.querySelector('.main');
maindiv.appendChild(div);
let sumbitbtn=document.querySelector('.sub-btn');

sumbitbtn.addEventListener('click',displayStudentDetails);

function displayStudentDetails(){

    let fname =document.querySelector('.fname').value;
    let lname =document.querySelector('.lname').value;
    let email=document.querySelector('.email').value;
    let country=document.querySelector('.country').value;
    let gender=document.querySelector('input[name="gender"]:checked').value;
    let source=gender=='male'?'download1.png':'images.png';
    let html=` <div class="card">
          <img src=${source} height="50" width="50">
           <div class="student-details">
          <div class="stdu-name">${fname} ${lname}</div>
          <div class="stdu-email"><i>${email}</i></div>
          <div class="country-card">${country}</div>
          </div>
         <div class="div-remove-card">
        <button class="remove-card">X</button>
         </div>
        </div>`;
    
        div.insertAdjacentHTML('beforeend',html);

        document.querySelector('.remove-card')
        .addEventListener('click',function() {
            
            let removeEl=this.parentNode.parentNode;
        
             div.removeChild(removeEl);
        })
        i++;
    }