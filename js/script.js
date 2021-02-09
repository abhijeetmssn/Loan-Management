storeLoanData = () => {
    const companyName = document.getElementById("cName").value;
    const companyOwner = document.getElementById("cOwner").value;
    const emailAddress = document.getElementById("email").value;
    const phoneNumber = document.getElementById("pNumber").value;
    const annualSale = document.getElementById("annualSale").value;
    const borrowAmount = document.getElementById("borrowAmount").value;
    const paymentTerms = document.getElementById("paymentTerms").value;
  
    let loanObject = {
      companyName: companyName,
      companyOwner: companyOwner,
      emailAddress: emailAddress,
      phoneNumber: phoneNumber,
      annualSale: annualSale,
      borrowAmount: borrowAmount,
      paymentTerms: paymentTerms
    }
    if (companyName == "") {
        alert(" Company Name must be filled out");
        return false;
         }
    if (companyOwner == "") {
        alert(" Company Owner must be filled out");
        return false;
        } 
    if (emailAddress == "") {
        alert(" Email Address must be filled out");
        return false;
        }
        if (phoneNumber == "") {
                alert(" Phone Number must be filled out");
                return false;
                 }
       if (annualSale == "") {
                alert(" Annual Sale must be filled out");
                return false;
                } 
        if (borrowAmount == "") {
                alert(" Borrow Amount must be filled out");
                return false;
                }   
        if (paymentTerms == "" ) {
                    alert(" Payment terms must be filled out");
                    return false;
                    }             
    localStorage.setItem("loanData", JSON.stringify((loanObject)));
  
    if (true) {
      window.location.href = "./approval.html";
    }
    else
      alert("Missing Information")
  }
  
  let interest, payment, profit, loanInfo;
  getLoanData = () => {
    loanInfo = JSON.parse(localStorage.getItem("loanData"));
    if (loanInfo) {
      document.getElementById("cName").innerHTML = loanInfo.companyName;
      document.getElementById("cOwner").innerHTML = loanInfo.companyOwner;
      document.getElementById("email").innerHTML = loanInfo.emailAddress;
      document.getElementById("borrowAmount").innerHTML = loanInfo.borrowAmount;
      document.getElementById("paymentTerms").innerHTML = loanInfo.paymentTerms;
    
      interest = (loanInfo.borrowAmount * loanInfo.paymentTerms) / (12 * 3);
      payment = parseInt(loanInfo.borrowAmount)
        + interest;
      profit = payment - parseInt(loanInfo.borrowAmount);
    
      if (interest) {
        document.getElementById("interest").innerHTML = interest.toFixed(2);
        document.getElementById("payment").innerHTML = payment.toFixed(2);
        document.getElementById("profit").innerHTML = profit.toFixed(2);
      }
    }
  }
  
  let decision;
  storeDecision = () => {
    decision = document.getElementById("decision").value;
  }
  
  storeAllLoanData = () => {
    let updateLoadObj = {
      ...loanInfo,
      interest: interest.toFixed(2),
      payment: payment.toFixed(2),
      profit: profit.toFixed(2),
      decision: decision
    }
  
    localStorage.setItem("loanData", JSON.stringify((updateLoadObj)));
    let message = "";
    if (decision === "Accept") {
      message = "Accpeted Successfully"
      document.getElementById("finalMessage").innerHTML = message.fontcolor('green');
    } else if (decision === "Reject") {
      message = "Your Application is Rejected";
      document.getElementById("finalMessage").innerHTML = message.fontcolor('red');
    } else if (decision === "moreInfo") {
      message = "You need some extra Information";
      document.getElementById("finalMessage").innerHTML = message.fontcolor('yellow');
    }
  
  
  }
  