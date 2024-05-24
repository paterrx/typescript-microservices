using Microsoft.AspNetCore.Mvc;

namespace web_app_restaurante.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
