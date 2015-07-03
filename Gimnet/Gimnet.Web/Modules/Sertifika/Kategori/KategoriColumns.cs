
namespace Gimnet.Sertifika.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Sertifika.Kategori")]
    [BasedOnRow(typeof(Entities.KategoriRow))]
    public class KategoriColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String KategoriAdi { get; set; }
        public DateTime EklenmeTarihi { get; set; }
    }
}