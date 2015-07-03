
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
        public String ResimKonumu { get; set; }
        public DateTime EklenmeTarihi { get; set; }
        public Int32 SertifikaId { get; set; }
    }
}