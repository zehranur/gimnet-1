

//[assembly: Serenity.Navigation.NavigationLink(int.MaxValue, "Sertifikasyon/Sertifika Resimleri", typeof(Gimnet.Sertifika.Pages.SertifikaResimController))]

namespace Gimnet.Sertifika.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Sertifika/SertifikaResim"), Route("{action=index}")]
    public class SertifikaResimController : Controller
    {
        [PageAuthorize("Default")]
        public ActionResult Index()
        {
            return View("~/Modules/Sertifika/SertifikaResim/SertifikaResimIndex.cshtml");
        }
    }
}