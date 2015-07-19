
namespace Gimnet.Sertifika.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Sertifika.HelalSertifika")]
    [BasedOnRow(typeof(Entities.HelalSertifikaRow))]
    public class HelalSertifikaColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public Int32 KategoriId { get; set; }
        public Int32 FirmaId { get; set; }
        [EditLink]
        public String Marka { get; set; }
        public DateTime İlkBasvuruTarihi { get; set; }
        public DateTime YenilemeTarihi { get; set; }
        public String SertifikaKapsami { get; set; }
        public Int16 Durum { get; set; }
        public String KapsamDisi { get; set; }
        public DateTime BitisTarihi { get; set; }
        public String İptalAciklamasi { get; set; }
    }
}