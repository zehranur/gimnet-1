using Serenity.ComponentModel;
using System;
using System.ComponentModel;

namespace Gimnet.Sertifika
{
    [ScriptInclude]
    public enum SertifikaDurumIds : long
    {
        [Description("Seçiniz")]
        None = 0,
        [Description("Geçerli")]
        Gecerli = 1,
        [Description("Süresi Geçmiş")]
        SuresiGecmis = 2
    }
}

