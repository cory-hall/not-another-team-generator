// base html generation
const generateHTML = cards => {
   return `
   <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>Team Profile</title>
<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet">
<link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="../src/style.css">
<style>
</style>
</head>
<body>
<div class="header">
<div class="jumbotron bg-danger">
   <h1 class="display-4 text-white text-center">My Not So Average Team</h1>
</div>
</div>
<div class="container-body container-fluid">
   <div class="row">
   ${cards}
    </div>
</div>
<script src="https://kit.fontawesome.com/257de25400.js" crossorigin="anonymous"></script>  
</body>
</html>
   `
};

// card generation
const generateCards = arr => {
   let roleIcon;
   let roleInfo;

   // if employee role is manager
   // add manager icon and office number
   if (arr.role === "Manager") {
      roleIcon = `<i class="fas fa-mug-hot"></i>`;
      roleInfo = `Office Number: ${arr.officeNum}`;
   }
   // if employee role is engineer
   // add engineer icon and github link
   else if (arr.role === "Engineer") {
      roleIcon = `<i class="fas fa-glasses"></i>`;
      roleInfo = `GitHub Username: <a href="https://github.com/${arr.github}" target="_blank">${arr.github}</a>`;
   }
   // if employee role is intern
   // add intern icon and school
   else if (arr.role === "Intern") {
      roleIcon = `<i class="fas fa-user-graduate"></i>`;
      roleInfo = `School: ${arr.school}`;
   }

   // the markup to add to the HTML generation
   return `
   <div class="col-sm-4 col-6">
      <div class="card mb-5 bg-white">
         <div class="card-header bg-primary">
            <h4 class="text-white">${arr.name}</h4>
            <h4 class="text-white">${roleIcon}</i> ${arr.role}</h4>
         </div>
         <div class="card-body bg">
            <ul class="list-unstyled">
               <li>ID Number: ${arr.idNum}</li>
               <li>E-mail: <a href="mailto:${arr.email}">${arr.email}</a></li>
               <li>${roleInfo}</li>
            </ul>
         </div>
      </div>
   </div>
   `
};

module.exports = { generateHTML, generateCards };