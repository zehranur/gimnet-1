
namespace Gimnet.Sertifika.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Sertifika.DenetlemeTakvimi")]
    [BasedOnRow(typeof(Entities.DenetlemeTakvimiRow))]
    public class DenetlemeTakvimiForm
    {
        public Int32 FirmaId { get; set; }
        public DateTime PlanananTarih { get; set; }
        public DateTime DenetlemeTarihi { get; set; }
        public String Denetciler { get; set; }
        public DenetlemeDurumIds Durumu { get; set; }
        public String Sonuc { get; set; }
    }
}