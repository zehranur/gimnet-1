using Serenity.ComponentModel;
using System;
using System.ComponentModel;

namespace Gimnet.Sertifika
{
    [ScriptInclude]
    public enum FirmaDurumIds : long
    {
        [Description("Seçiniz")]
        None = 0,
        [Description("Normal")]
        Normal = 1,
        [Description("Çalışmakta")]
        Yasakli = 2
    }
}

