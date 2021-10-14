let result =  document.getElementById("Inputext");
result.value = '';                       //শুরুতে ইনপুট এ ফাকা রাখার কোড
let calculate=(number)=>{               // result.value = result.value + number এর shortcut নিচে দেয়া 
    result.value +=  number ;           //calculate()function call করলে যে কাজ হবে
}   
let totalResult=()=>{
    if(result.value == ""){ alert("Enter the Valid Number আহাম্মক")} // input empty হলে তাহলে alert দিতে বলা হইছে  
    else{
    try{  
        result.value = eval(result.value); // কোন ভুল হলে তা eval() দ্বারা শনাক্ত করে catch এ পাঠায় 
    }
    catch(err){                            // error হলে পরবর্তী করনীয় নিচে দেয়া 
        alert("Enter the valid input");    // alert() k call করে user কে আবার ইনপুট সাবধান এ দেয়ার কাজ করে 
        result.value = "";                 // নতুন করে ইনপুট এর জাগা ফাকা করে 
        }
    }
}
let allClear=()=>{   
    result.value = "";                     // এই function call করলে ইনপুট ফাকা হয়ে যায় 
}
let del=()=>{
    result.value = result.value.slice(0,-1) ;// এই function call করলে তা ইনপুট এর মান এর শেষের শব্দ বাদ দিয়া দেয় 
}