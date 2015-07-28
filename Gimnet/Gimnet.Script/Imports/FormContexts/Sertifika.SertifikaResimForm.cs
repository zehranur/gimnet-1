
namespace Gimnet.Sertifika
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Runtime.CompilerServices;

    public partial class SertifikaResimForm : PrefixedContext
    {
        [InlineConstant] public const string FormKey = "Sertifika.SertifikaResim";
    
        public SertifikaResimForm(string idPrefix) : base(idPrefix) {}
    
        public IntegerEditor SertifikaId { get { return ById<IntegerEditor>("SertifikaId"); } }
        public ImageUploadEditor ResimKonumu { get { return ById<ImageUploadEditor>("ResimKonumu"); } }
        public DateEditor GecerlilikTarihiBaslangic { get { return ById<DateEditor>("GecerlilikTarihiBaslangic"); } }
        public DateEditor GecerlilikTarihiBitis { get { return ById<DateEditor>("GecerlilikTarihiBitis"); } }
        public DateEditor EklenmeTarihi { get { return ById<DateEditor>("EklenmeTarihi"); } }
    }
}

