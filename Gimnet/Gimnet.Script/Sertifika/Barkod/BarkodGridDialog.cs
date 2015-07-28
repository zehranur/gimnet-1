namespace Gimnet.Sertifika.Barkod
{
    using System;
    using jQueryApi;
    using jQueryApi.UI.Widgets;
    using Serenity;
    using System.Collections.Generic;

    [IdProperty("Id")]
    public class BarkodGridDialog : TemplatedDialog
    {
        public HelalSertifikaRow Sertifika { get; set; }
        public BarkodGrid BarkodGrid { get; set; }

        public BarkodGridDialog()
        {
            BarkodGrid = new BarkodGrid(ById("GridDiv"));
        }

        protected override void OnDialogOpen()
        {
            base.OnDialogOpen();

            J(".ui-widget-overlay.ui-front").Last().CSS("opacity", "0.5");
        }

        protected override List<ToolButton> GetToolbarButtons()
        {
            return new List<ToolButton>();
        }

        protected override DialogOptions GetDialogOptions()
        {
            var dialogOptions = base.GetDialogOptions();
            dialogOptions.Resizable = true;
            return dialogOptions;
        }

        protected override string GetTemplateName()
        {
            return "GridDialog";
        }

        public void UpdateTitle()
        {
            if (this.Sertifika == null)
                return;

            element.Dialog().Title = string.Format("{0} {2} Sertifikası İçin Ürün Barkodları", Sertifika.FirmaFirmaAdi, Sertifika.Marka);
        }


        public void LoadByIdAndOpenDialog(Int32 sertifikaID)
        {
            this.SertifikaID = sertifikaID;
            this.DialogOpen();
        }

        public Int32? SertifikaID
        {
            get { return Sertifika != null ? this.Sertifika.Id : null; }
            set
            {
                if (this.Sertifika == null || this.Sertifika.Id != value)
                {
                    var sertID = value;
                    HelalSertifikaService.Retrieve(new RetrieveRequest
                    {
                        EntityId = sertID.Value
                    }, onSuccess: response =>
                    {
                        Sertifika = response.Entity;
                        this.BarkodGrid.SertifikaRow = this.Sertifika;
                        UpdateTitle();
                    });
                }
            }
        }
    }
}
   