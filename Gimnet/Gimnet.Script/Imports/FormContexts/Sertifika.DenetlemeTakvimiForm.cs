
namespace Gimnet.Sertifika
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Runtime.CompilerServices;

    public partial class DenetlemeTakvimiForm : PrefixedContext
    {
        [InlineConstant] public const string FormKey = "Sertifika.DenetlemeTakvimi";
    
        public DenetlemeTakvimiForm(string idPrefix) : base(idPrefix) {}
    
        public IntegerEditor FirmaId { get { return ById<IntegerEditor>("FirmaId"); } }
        public DateEditor PlanananTarih { get { return ById<DateEditor>("PlanananTarih"); } }
        public DateEditor DenetlemeTarihi { get { return ById<DateEditor>("DenetlemeTarihi"); } }
        public TextAreaEditor Denetciler { get { return ById<TextAreaEditor>("Denetciler"); } }
        public EnumEditor Durumu { get { return ById<EnumEditor>("Durumu"); } }
        public TextAreaEditor Sonuc { get { return ById<TextAreaEditor>("Sonuc"); } }
    }
}

