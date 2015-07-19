
namespace Gimnet.Duyuru
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Runtime.CompilerServices;
    using Gimnet.Sertifika.Kategori;
    using Gimnet.Sertifika.Firma;

    public partial class DuyuruForm : PrefixedContext
    {
        public DuyuruForm(string idPrefix) : base(idPrefix) {}
    
        public StringEditor Baslik { get { return ById<StringEditor>("Baslik"); } }
        public DateEditor EklemeTarihi { get { return ById<DateEditor>("EklemeTarihi"); } }
        public StringEditor DuyuruMetni { get { return ById<StringEditor>("DuyuruMetni"); } }
        public DateEditor SonTarih { get { return ById<DateEditor>("SonTarih"); } }
    }
}

