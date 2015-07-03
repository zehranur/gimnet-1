
namespace Gimnet.Sertifika.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Sertifika.Firma")]
    [BasedOnRow(typeof(Entities.FirmaRow))]
    public class FirmaColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink,DisplayName("Firma Adı")]
        public String FirmaAdi { get; set; }
        [Hidden]
        public String KucukLogo { get; set; }
        [Hidden]
        public String OrtaLogo { get; set; }
        [Hidden]
        public String BuyukLogo { get; set; }
        [DisplayName("Bulunduğu Şehir")]
        public String KonumSehir { get; set; }
        public String Telefon { get; set; }
        [DisplayName("Web Sayfası")]
        public String WebSayfasi { get; set; }
        [DisplayName("İletişim")]
        public String IletisimEmail { get; set; }
    }
}