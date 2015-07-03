
namespace Gimnet.HelalDunyaMarket.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("HelalDunyaMarket.HelalMarket")]
    [BasedOnRow(typeof(Entities.HelalMarketRow))]
    public class HelalMarketColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String Adi { get; set; }
        public String AcikAdres { get; set; }
        public String AdresAciklama { get; set; }
        public String SorumluKisi { get; set; }
        public String Telefon1 { get; set; }
        public String Telefon2 { get; set; }
        public String Koordinat { get; set; }
        public DateTime EklemeTarihi { get; set; }
        public DateTime GuncellemeTarihi { get; set; }
    }
}