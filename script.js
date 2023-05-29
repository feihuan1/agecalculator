const btn = document.getElementById('btn')
const input = document.querySelector('#birthday')
const result = document.getElementById('result')
const form = document.querySelector('.form')
const calculateAge = () => {
    const birthday = input.value;
    if(birthday === ''){ 
       alert('Plearse ender your birthday')
    }else{
        const age = getAge(birthday)
        if(age < 0){return alert('Plearse ender valid birthday')};
        result.style.display = 'block'
        if(age > 122){
            result.innerText = 'Congratulations! you are the oldest person in human history';
            const link = document.createElement('a');
            link.innerText= 'Here is the list of oldest people in history'
            link.href = 'https://en.wikipedia.org/wiki/List_of_the_verified_oldest_people'
            form.append(link)
        }else{
        result.innerText = `Your age is ${age} ${age > 1 ? 'years' : 'year'} old`}
    }
    
}

const getAge = (birthday) => {
   const today = new Date()
   const birthdayDate = new Date(birthday) 
   let age = today.getFullYear() - birthdayDate.getFullYear()
   const month = today.getMonth() - birthdayDate.getMonth()
   if(month < 0 || (month === 0 && today.getDate() < birthdayDate.getDate())){
    age -= 1;
   }
   return age
}

btn.addEventListener('click',calculateAge)