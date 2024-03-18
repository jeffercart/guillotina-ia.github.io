function showContent(index) {
    var contentDiv = document.getElementById("content");
    var content = "";
  
    switch (index) {
      case 1:
        content = "<video width=100% controls autoplay><source src='vid/cap1.mp4' type='video/mp4'>Your browser does not support the video tag.</video>";
        break;
      case 2:
        content = "<img src='img/1.png' alt='diario'>";
        break;
      case 3:
        content = "<video width=100% controls autoplay><source src='vid/cap2.mp4' type='video/mp4'>Your browser does not support the video tag.</video>";
        break;
      case 4:
        content = "<video width=100% controls autoplay><source src='vid/cap3.mp4' type='video/mp4'>Your browser does not support the video tag.</video>";
        break;
    case 5:
        content = "<video width=100% controls autoplay><source src='vid/cap4.mp4' type='video/mp4'>Your browser does not support the video tag.</video>";
        break;
    case 6:
        content = "<video width=100% controls autoplay><source src='vid/cap5.mp4' type='video/mp4'>Your browser does not support the video tag.</video>";
        break;
    case 7:
        content = "<video width=100% controls autoplay><source src='vid/cap6.mp4' type='video/mp4'>Your browser does not support the video tag.</video>";
        break;
    case 8:
        content = "<img src='img/2.png' alt='historia'>";        
        break;
    case 9:
        content = "<video width=100% controls autoplay><source src='vid/cap7.mp4' type='video/mp4'>Your browser does not support the video tag.</video>";
        break;
    case 10:
        content = "<video width=100% controls autoplay><source src='vid/cap8.mp4' type='video/mp4'>Your browser does not support the video tag.</video>";
        break;
    case 11:
        content = "<video width=100% controls autoplay><source src='vid/cap9.mp4' type='video/mp4'>Your browser does not support the video tag.</video>";
        break;
    case 12:
        content = "<img src='img/3.png' alt='afiche'>";        
        break;

      default:
        content = "Contenido no encontrado";
    }
  
    contentDiv.innerHTML = content;
  }

  document.addEventListener("DOMContentLoaded", function() {
    var overlay = document.getElementById('instrucciones');
    
    // Función para ocultar el overlay al hacer clic en cualquier parte
    overlay.addEventListener('click', function() {
        overlay.style.display = 'none';
    });
});
  