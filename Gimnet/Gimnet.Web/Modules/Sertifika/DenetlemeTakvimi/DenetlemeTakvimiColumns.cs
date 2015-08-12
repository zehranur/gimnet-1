
namespace Gimnet.Sertifika.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Sertifika.DenetlemeTakvimi")]
    [BasedOnRow(typeof(Entities.DenetlemeTakvimiRow))]
    public class DenetlemeTakvimiColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String FirmaFirmaAdi { get; set; }
        public DateTime PlanananTarih { get; set; }
        public DateTime DenetlemeTarihi { get; set; }
        public String Denetciler { get; set; }
        public DenetlemeDurumIds Durumu { get; set; }
        public String Sonuc { get; set; }
    }
}