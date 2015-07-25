
namespace Gimnet.Sertifika
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Runtime.CompilerServices;

    [EnumKey("Gimnet.Sertifika.FirmaDurumIds"), PreserveMemberCase]
    public enum FirmaDurumIds
    {
        None = 0,
        Normal = 1,
        Yasakli = 2
    }
    
}

