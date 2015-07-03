
namespace Gimnet.Sertifika.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Sertifika.SertifikaResim")]
    [BasedOnRow(typeof(Entities.SertifikaResimRow))]
    public class SertifikaResimColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String ResimKonumu { get; set; }
        public DateTime EklenmeTarihi { get; set; }
        public Int32 SertifikaId { get; set; }
    }
}