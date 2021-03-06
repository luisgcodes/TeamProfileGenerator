// Fills proper role inputs
function generateHtml(array) {
    var employeeRole = ``;
    array.forEach((employee) => {
      var other = ``;
      if (employee.getRole() === "Manager") {
        other = `<span class="list-group-item text-lg">Office Number: ${employee.getOfficeNumber()}</span>`;
      } else if (employee.getRole() === "Engineer") {
        other = `<span class="list-group-item text-lg">GitHub:  <a class="font-bold text-xl" href="https://github.com/${employee.getGithub()}">${employee.getGithub()}</a></span>`;
      } else {
        other = `<span class="list-group-item text-lg">School: ${employee.getSchool()}</span>`;         
      }
  
      // create new employee card
      var card = `  <article class="p-10 min-h-116 max-w-xl w-full bg-cyan-600 rounded-xl text-gray-100 transform duration-500 hover:-translate-y-1 cursor-pointer drop-shadow-2xl">
                    
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cup" viewBox="0 0 16 16">
          <path d="M1 2a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v1h.5A1.5 1.5 0 0 1 16 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-.55a2.5 2.5 0 0 1-2.45 2h-8A2.5 2.5 0 0 1 1 12.5V2zm13 10h.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5H14v8zM13 2H2v10.5A1.5 1.5 0 0 0 3.5 14h8a1.5 1.5 0 0 0 1.5-1.5V2z"/>
        </svg>
      <h1 class="text-4xl">${employee.getName()}</h1>
      <h1 class="mt-5 text-3xl text-gray-100 leading-snug  min-h-33">${employee.getRole()}</h1>
      <div class="mt-20">
          <span class="text-xl">ID: </span>
          <span class="font-bold text-xl"><span>${employee.getId()}</span></span>
      </div>
      <div class="mt-16 flex transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ...">
          <span class="text-xl">Email:&nbsp;</span> 
          <a class="font-bold text-lg" href = "mailto: abc@example.com">${employee.getEmail()}</a>
      </div>
      <div class="mt-16 flex transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ..."> 
          <span class="font-bold text-xl"><span>${other}</span></span>
      </div>
  </article>`;
  
      employeeRole += card;
    });

    // html generated with cards
    const cardGen = 
    
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://cdn.tailwindcss.com"></script>
        <!-- <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"> -->
        <title>My Team</title>
    </head>
    <body class="bg-teal-100">
        <!-- Header -->
        <header class="bg-cyan-600 px-7 py-6 flex flex-col lg:flex-row lg:items-center flex-shrink-0 text-white text-3xl font-mono text-center ">MY TEAM</header>
      
    
        <!-- Content -->
        <div class="content">
    
            
            <!-- Cards -->
            <section class="container mx-auto p-10 md:py-20 px-0 md:p-10 md:px-0">
                <section class="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10">
    
                            ${employeeRole}
                           
                </section>
            </section>
        </div>
      
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
          integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
          crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
          crossorigin="anonymous"></script>
      
        <script src="index.js"></script>
      </body>
      
      </html>`;
  
    return cardGen;
  }
  
  module.exports = generateHtml;