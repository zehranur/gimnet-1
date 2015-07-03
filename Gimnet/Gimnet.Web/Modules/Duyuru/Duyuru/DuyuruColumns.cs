
namespace Gimnet.Duyuru.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Duyuru.Duyuru")]
    [BasedOnRow(typeof(Entities.DuyuruRow))]
    public class DuyuruColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String Baslik { get; set; }
        public DateTime EklemeTarihi { get; set; }
        public String DuyuruMetni { get; set; }
        public DateTime SonTarih { get; set; }
    }
}