
namespace Gimnet.Sertifika.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Sertifika.Barkod")]
    [BasedOnRow(typeof(Entities.BarkodRow))]
    public class BarkodForm
    {
        public String Barkod { get; set; }
        public Int32 SertifikaId { get; set; }
        public String UrunAdi { get; set; }
    }
}