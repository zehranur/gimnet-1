
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
        public Int32 FirmaId { get; set; }
        public DateTime DenetlemeTarihi { get; set; }
        [EditLink]
        public String Denetciler { get; set; }
        public Int32 Durumu { get; set; }
        public String Sonuc { get; set; }
        public DateTime PlanananTarih { get; set; }
    }
}