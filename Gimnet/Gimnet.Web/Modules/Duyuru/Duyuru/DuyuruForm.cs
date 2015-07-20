
namespace Gimnet.Duyuru.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using Gimnet.Duyuru.Duyuru;

    [FormScript("Duyuru.Duyuru")]
    [BasedOnRow(typeof(Entities.DuyuruRow))]
    public class DuyuruForm
    {
        public String Baslik { get; set; }
        public DateTime EklemeTarihi { get; set; }
        [NotEditor]
        public String DuyuruMetni { get; set; }
        public DateTime SonTarih { get; set; }
    }
}