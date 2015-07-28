
namespace Gimnet.Sertifika
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Runtime.CompilerServices;

    public partial class BarkodForm : PrefixedContext
    {
        [InlineConstant] public const string FormKey = "Sertifika.Barkod";
    
        public BarkodForm(string idPrefix) : base(idPrefix) {}
    
        public StringEditor Barkod { get { return ById<StringEditor>("Barkod"); } }
        public IntegerEditor SertifikaId { get { return ById<IntegerEditor>("SertifikaId"); } }
        public StringEditor UrunAdi { get { return ById<StringEditor>("UrunAdi"); } }
    }
}

