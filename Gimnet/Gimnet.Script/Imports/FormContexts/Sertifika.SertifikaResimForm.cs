
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
    
        public StringEditor ResimKonumu { get { return ById<StringEditor>("ResimKonumu"); } }
        public DateEditor EklenmeTarihi { get { return ById<DateEditor>("EklenmeTarihi"); } }
        public IntegerEditor SertifikaId { get { return ById<IntegerEditor>("SertifikaId"); } }
    }
}

