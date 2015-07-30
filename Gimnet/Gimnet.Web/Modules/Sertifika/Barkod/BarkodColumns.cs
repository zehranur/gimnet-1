
namespace Gimnet.Sertifika.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Sertifika.Barkod")]
    [BasedOnRow(typeof(Entities.BarkodRow))]
    public class BarkodColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String Barkod { get; set; }
        public Int32 SertifikaId { get; set; }
        public String UrunAdi { get; set; }
    }
}