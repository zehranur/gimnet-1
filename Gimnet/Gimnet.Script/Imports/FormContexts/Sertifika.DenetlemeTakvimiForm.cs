
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
        public DateEditor DenetlemeTarihi { get { return ById<DateEditor>("DenetlemeTarihi"); } }
        public StringEditor Denetciler { get { return ById<StringEditor>("Denetciler"); } }
        public IntegerEditor Durumu { get { return ById<IntegerEditor>("Durumu"); } }
        public StringEditor Sonuc { get { return ById<StringEditor>("Sonuc"); } }
        public DateEditor PlanananTarih { get { return ById<DateEditor>("PlanananTarih"); } }
    }
}

