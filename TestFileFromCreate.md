
# Outlook Add-in: Using RoamingSettings to store add-in state in a user's mailbox

**Table of contents**

*   [Summary](#summary)
*   [Required tools](#prereq)
*   [How to install](#install)
*   [How to run](#run)
*   [Troubleshooting](#troubleshooting)
*   [Questions and comments](#questions)
*   [Contributing](#contribute)
*   [Additional resources](#additional-resources)

## <a name="user-content-summary" id="user-content-summary" aria-hidden="true"></a>Summary

**Scream into the void** is a Microsoft Outlook add-in that lets you rant about the email you are reading. This sample also demonstrates the use of RoamingSettings, a feature of Outlook add-ins to store roaming data in the user's mailbox.

Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.

To make your document look professionally produced, Word provides header, footer, cover page, and text box designs that complement each other. For example, you can add a matching cover page, header, and sidebar. Click Insert and then choose the elements you want from the different galleries.

[![](../../../../../../../readme-images/animated_screenshot.gif)](/readme-images/animated_screenshot.gif)

## <a name="user-content-prereq" id="user-content-required-tools" aria-hidden="true"></a>Required tools

*   [npm](https://www.npmjs.com/)
*   [Bower](http://bower.io/)
*   [Gulp](http://gulpjs.com/)

## <a name="user-content-install" id="user-content-how-to-install" aria-hidden="true"></a>How to install

1.  Clone this repository.
2.  Run `npm install` to install both npm and Bower dependencies.
3.  Run `gulp serve-static` to start development server.
4.  Go to [mail.office365.com](http://mail.office365.com) and sign in with your Microsoft Office 365 account.
5.  Click the gear icon for the Settings menu on the nav bar, and then choose _Manage add-ins_.
6.  Click the plus (+) icon, and then choose _Add from a file_.
7.  Browse to this repository folder and choose _manifest-outlook-add-in-scream.xml_.
8.  Complete the wizard (_Next_, _Install_, _OK_) to make the Add-in available on your Office 365 account.
9.  Open the [app](https://localhost:8443/appread/index.html) in a browser and trust the certificate for `localhost:8443`. The add-in won't run if your computer doesn't trust it.

## <a name="user-content-run" id="user-content-how-to-run" aria-hidden="true"></a>How to run

1.  After installing the add-in, go to [mail.office365.com](http://mail.office365.com).
2.  Open an email.
3.  Click _Add-ins_ at the top of the window to see available add-ins and choose **Scream into the void**.

## <a name="user-content-troubleshooting" id="user-content-troubleshooting" aria-hidden="true"></a>Troubleshooting

*   If the add-in doesn't appear in the task pane, choose **Insert > My Add-ins > Scream into the void**.

## <a name="user-content-questions" id="user-content-questions-and-comments" aria-hidden="true"></a>Questions and comments

*   If you have any trouble running this sample, please [log an issue](https://github.com/OfficeDev/Outlook-Add-in-Scream/issues).
*   Questions about Microsoft Office add-ins development in general should be posted to [Stack Overflow](http://stackoverflow.com/questions/tagged/office-addins). Make sure that your questions or comments are tagged with [office-addins].

## <a name="user-content-contribute" id="user-content-contributing" aria-hidden="true"></a>Contributing

We encourage you to contribute to our samples. For guidelines on how to proceed, see our [contribution guide](Contributing.md)

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## <a name="user-content-additional-resources" id="user-content-additional-resources" aria-hidden="true"></a>Additional resources

*   [More Add-in samples](https://github.com/OfficeDev?utf8=%E2%9C%93&query=-Add-in)
*   [Office Add-ins](http://msdn.microsoft.com/library/office/jj220060.aspx)
*   [Anatomy of an Add-in](https://msdn.microsoft.com/library/office/jj220082.aspx#StartBuildingApps_AnatomyofApp)
*   [Creating an Office add-in with Visual Studio](https://msdn.microsoft.com/library/office/fp179827.aspx#Tools_CreatingWithVS)
*   [Yeoman generator](https://github.com/OfficeDev/generator-office) - Yeoman generator for building Microsoft Office related projects (including Add-ins). This project was built using it.
*   [Office UI Fabric](https://dev.office.com/fabric) - The front-end framework for building experiences for Office 365\. This project uses it to get an Office "look and feel".
*   [dev.office.com](https://dev.office.com) - Find documentation, samples, and other helpful information relevant to Office development.

## Copyright

Copyright (c) 2015 Microsoft. All rights reserved.
