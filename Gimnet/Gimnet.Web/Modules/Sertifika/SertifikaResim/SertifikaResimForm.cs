
namespace Gimnet.Sertifika.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Sertifika.SertifikaResim")]
    [BasedOnRow(typeof(Entities.SertifikaResimRow))]
    public class SertifikaResimForm
    {
        public Int32 SertifikaId { get; set; }
        [ImageUploadEditor()]
        public String ResimKonumu { get; set; }

        public DateTime GecerlilikTarihiBaslangic { get; set; }
        public DateTime GecerlilikTarihiBitis { get; set; }

        public DateTime EklenmeTarihi { get; set; }

    }
}