
export class Doc {

  id: number = 0;
  category_id: number = 0;
  content: string = '';

  static DOCS = [
    {
      slug: 'introduction',
      content_html: `
      <div class="intro-component-animation">
        <h1>​​Introducing the <b>metacloud</b></h1>
        <p>The metacloud is a virtual reality world where users can interact, create, host and monetize events and experiences, assist in live concerts, and much more.  It’s a decentralized world of possibilities presented for users to create the experiences they have always imagined.</p>
      </div>
      `,
    },
    {
      slug: 'faq',
      content_html: `
      <div class="intro-component-animation">
        <h1>​​FAQ</h1>
        <h5>What software do I need to play on the metacloud?</h5>
        <p>A PC or Mac running Chrome, Firefox, Brave.</p>

        <h5>Can I log in from multiple computers?</h5>
        <p>Yes, you can run metacloud from multiple computers as long as you have your digital wallet installed on each machine.</p>

        <h5>Is this mobile responsive?</h5>
        <p>Mobile devices are not supported on the metacloud (yet).</p>

        <h5>Do I need a wallet to play in metacloud?</h5>
        <p>In order to live the full metacloud experience, you’ll need  a digital wallet to serve you as an account that keeps all your digital assets and in-world progress absolutely safe.</p>
        <p>The metacloud experience without a digital wallet will have your information stored locally. Events, rewards or multiple device log in will not be possible</p>

        <h5>What is $CLOUD?</h5>
        <p>$CLOUD is metacloud ’s fungible, BEP20 cryptocurrency token. $CLOUD is burned, or spent, in exchange for LAND parcels.</p>

        <h5>Will I be able to buy things other than LAND with $CLOUD?</h5>
        <p>Exactly, users will be able to trade $CLOUD with other users in exchange for goods and services hosted within metacloud.</p>

        <h5>How can I get new wearables?</h5>
        <p>Exclusive wearables in the metacloud will be available. But the free of charge avatar editor counts with an interesting selection of wearables and accessories.</p>

        <h5>Can I claim my Avatar name later?</h5>
        <p>You can visit the Names page in the Builder to claim it. All you need is an installed digital wallet and at least 100 $CLOUD to burn. Another alternative is to buy a name in the metacloud Marketplace.</p>

        <h5>What is LAND?</h5>
        <p>LAND is a non-fungible digital asset maintained in an BSC smart contract. It’s divided into parcels that are referenced using unique x,y cartesian coordinates. Each LAND token includes a record of its coordinates, its owner, and a reference to a content description file or parcel manifest that describes and encodes the content the owner wishes to serve on his or her land.</p>

        <h5>What is an Estate?</h5>
        <p>Like LAND, an estate is a non-fungible digital asset. An estate is an association of two or more directly adjacent parcels of LAND. These parcels must be directly adjacent and cannot be separated by a road, plaza or any other parcel. By connecting parcels to form Estates, you can more easily manage your larger LAND holdings. Estates are especially useful when building larger scenes that span more than one parcel.</p>

        <h5>How can I buy LAND or Estates in metacloud?</h5>
        <p>You will be able to visit  the metacloud  Marketplace to browse through all of the available LANDs or Estates of LAND that are currently for sale.</p>

        <h5>What does ‘owning’ virtual LAND mean and how does it work?</h5>
        <p>LAND within metacloud  is represented by non-fungible LAND tokens (meaning that each is unique and cannot be replicated) that track ownership on the BSC blockchain. Owning LAND within metacloud  is akin to owning any other unique, crypto asset like <a href="https://www.cryptokitties.co/" target="_blank">CryptoKitties</a> or <a href="https://www.larvalabs.com/cryptopunks" target="_blank">CryptoPunks</a>, however you will be able to use your LAND within metacloud  to build three dimensional spaces and applications. LAND is built on our BEP721 standard, making it a digital asset that can be traded with other users, like other digital assets.</p>

        <h5>Why is LAND scarce?</h5>
        <p>Like CryptoKitties and CryptoPunks, LAND is a non-fungible digital asset. To ensure that the value of LAND parcels remains stable, the amount of land in metacloud  corresponds to the fixed, total amount of $CLOUD.</p>
        <p>Without LAND scarcity, many parcels would likely be left abandoned, negatively impacting the quality of content in metacloud  and the user experience.</p>

        <h5>Is metacloud running on top of its own blockchain?</h5>
        <p>metacloud uses the BSC blockchain to store and verify information about LAND ownership and LAND content. It does not run on its own independent blockchain. Content within metacloud  is hosted and served to users via a network of community-owned content servers.</p>

        <h5>How are transactions validated?</h5>
        <p>The BSC LAND smart contract registers any changes to the state of a parcel of LAND, such as a change in the contents of the LAND or a transfer of ownership. These changes are recorded and verified by the BSC blockchain.</p>

        <h5>What if I lose my wallet?</h5>
        <p>It’s very important to keep your wallet recovery pass phrases safe. If those are lost, your name, avatar and wearables or NFT items will be lost.</p>

        <h5>How is content distributed?</h5>
        <p>The visual, audio and three dimensional content of metacloud  will be stored in a network of content servers. Anyone can submit a server to join this network, but it must be voted on by the community. When you visit metacloud , the content needed to render your location will be pulled from the content servers. Each LAND token, stored on the BSC blockchain, is associated with an x,y location within the world and links to the content for that location.</p>

        <h5>What’s the way to start creating at metacloud?</h5>
        <ul>
          <li>The Builder will provide you with sufficient pre-made items to build your experiences the way you prefer. You can also import and use your own custom 3D models.</li>
          <li>An SDK will be provided for writing code. The community will add amazing development to the metaverse.</li>
        </ul>

        <h5>Am I able to control the content on my parcels?</h5>
        <p>Metacloud will present you with tools to control how content on your parcel is presented to other users within the platform. However, you should consider that whenever you upload content to the metacloud servers you are essentially making it publicly available since they are a distributed file system.</p>
        <p>Specifications on which other users can access your art gallery, your house or event can be managed. However, you need to consider that public content as 3D models will be always available to see for other users. They will notice your creations on the metacloud.</p>

        <h5>Am I able to report another user?</h5>
        <p>Click on another’s Avatar to see their profile, then click on the tab report. If you report a player, you will be able to bring a player’s conduct to the attention of metacloud ’s Community.</p>

        <h5>Am I able to block another user/player?</h5>
        <p>Though you will still see them, those blocked players won’t be able to address you by chat.</p>
      </div>
      `,
    },
    {
      slug: 'marketplace-overview',
      content_html: `
      <div class="intro-component-animation">
        <h1>Marketplace introduction</h1>
        <p>The metacloud’s market will allow you to sell names, wearables, parcels and Estates of LAND by setting your prices in $CLOUD. Transfers will also be available.</p>
        <h5>First step in the marketplace</h5>
        <p>Before using the marketplace, you will need to connect and log into an BSC client account. We recommend using <a href="https://metamask.io/" target="_blank">Metamask</a>. Your wallet address works as your metacloud account.</p>
        <p>Our marketplace is currently being developed. Much more information is coming soon!</p>
      </div>
      `,
    },
    {
      slug: 'creating-content',
      content_html: `
      <div class="intro-component-animation">
        <h1>Get ready to bring your ideas to life.</h1>
        <h4>Some Key Concepts</h4>
        <p>LAND: The metacloud is made up of 16-meter-by-16-meter-long LAND chunks. SCENE: It´s a collection of in-world metacloud experiences created on one or more parcels.</p>
        <h4>Main Characteristics</h4>
        <ul>
          <li>By leveraging the private metacloud SDK, the builder generates the appropriate code without you having to look at it.</li>
          <li>Every scene represents one unique escence. Scenes might contain goods which cannot cross into another scene.</li>
          <li>Metacloud´s Builder will present you a drag and drop experience, no coding will be needed to create in the metacloud.</li>
        </ul>
        <h6>The metacloud MVP concept</h6>
        <p>An MVP will be the first experience for you as a creator with our SDK. It’s purpose is only to show a first idea of the possibilities at the metacloud.</p>
        <h6>Important factors for Developing MVPs</h6>
        <ul>
          <li><b>Scene:</b> A user will experience as if they are in a new environment.</li>
          <li><b>Art:</b> Is key to set tone and appearance to reflect your artistic intentions. Go through a process of creating and deploying art in the metacloud. Billboards or other forms of signage are accepted.</li>
          <li><b>UX</b> Other users can come to your scene and participate. Make sure yours is something worth remembering :)</li>
        </ul>
        <h4>Phases during your prototyping</h4>
        <p>Phasing the development will allow you to further expand your experiences while generating multiple prototypes, each one building on the last!</p>
        <h6>About Single Player / Multiplayer</h6>
        <p>Begin by creating a single-player prototype. Then you may start thinking about how to write multiplayer interactions. Finally, you can work on your transactional layers-based <a href="https://gameanalytics.com/blog/how-to-perfect-your-games-core-loop/" target="_blank">core loop</a></p>
        <h6>On core loop</h6>
        <p>These loops can be found in any type of virtual experience. The essential loops that drive player´s actions (and the game's response to those actions) are known as a core loop in game design. There are some infrastructure ideas metacloud´s client draws from Angular, and only renders a scene when there is a change, rather than at a steady rate.</p>
        <h6>On Transactional Layers (TLs)</h6>
        <p>The TLs are the interfaces between systems that keep a permanent record of player actions. However, this does not mean that the layers themselves can´t receive an update, for example, the blockchain might get an update (or another application that is integrated into your experience). The creation and maintenance of this permanent record are key in providing a personalized experience.</p>
        <h4>Factors to consider</h4>
        <p>More advanced releases may focus on mechanics. Mechanics encompass all of the activities that a player can do as well as the replies that the system will deliver in reaction to those actions.</p>
        <ul>
          <li>It's critical to be aware of <b>device interoperability</b>. Users may access your scene via a PC, a mobile device, or a virtual reality headset. Users should be able to interact reasonably well with your scene using either. Remember that for VR, whirling movements could create motion sickness, so special attention in these cases is required.</li>
          <li>Another vital part of a scene's ambiance is <b>audio and special effects</b>. Ambience sounds like voices, wind, or crickets can be quite effective at increasing immersion and providing context. To put more or less emphasis on a sound's location, you can modify how loudness levels correspond to distance from the sound source.</li>
          <li>
            Each release's focus may differ, or it may be a mix of all aspects of the experience. However, you should strive to create increasingly complex experiences, with each iteration building on the previous.
            <ol> E.g.:
              <li>MVP: Single-player</li>
              <li>Release V.2.0:Add multiplayer and interactivity support in the second release.</li>
              <li>Release V3.0:Introduce your first mechanic.</li>
              <li>Release 4: Support for audio and ambience.</li>
              <li>Release 5: Put the finishing touches on…</li>
            </ol>
          </li>
          <p>Like with everything, first impressions can go a long way. Players will be unhappy if they have an empty experience. A scene with some basic material and experiences, on the other hand, gives players a taste of what's to come and motivates them to interact with your community and return to the following few releases.</p>
        </ul>
        <h6>Single Player MVPs</h6>
        <p>You might want to create your MVPs as single-player experiences.Consider the following consecutive events:</p>
        <ul>
          <li>The world can be entered by a single player.</li>
          <li>Within the scene, the player can interact with one or two simple entities.</li>
          <li>Other players can join in on the fun and interact with the world and one other.</li>
          <li>In addition, you may add the ability to track each player's events and activities, as well as recall when they entered the scene.</li>
        </ul>
        <h6>Sharing your MVP</h6>
        <p>Although the metacloud world is still closed to the general public, you will be able to upload a scene preview to a server, and quickly share a link to it with anyone who can provide feedback. We still advocate testing modifications with test users in a separate preview server before publishing a new version of your scene to metacloud, even after metacloud is open to everyone.</p>
        <h4>On Persistence</h4>
        <p>Note that you will always want to achieve a level of persistence such that it allows you to portray that your infrastructure´s transactional layers (TLs) are functioning. These refer <b>not only to the activities</b> of the players, but also to the <b>system's responses</b> to them.</p>
        <h6>Typical factors to include</h6>
        <ul>
          <li>Players´ information: includes user/login name, location, timezone, etc.</li>
          <li>Statistics: the history of game results, leaderboards (if any), global/regional standings for gamification, and contests, etc.</li>
          <li>Validation of identity: Crypto wallet address (or any other chosen identity management service).</li>
          <li>Integrated Apps/ Blockchain updates: required for transactional traceability, user experience, etc.</li>
          <li>Temporary data for persistence across a possibly distributed platform.</li>
        </ul>
      </div>
      `,
    },
    {
      slug: 'builder-faq',
      content_html: `
      <div class="intro-component-animation">
        <h1>Our Builder FAQ</h1>
        <p>When it comes to building your own venue on the metacloud, there are points you’ll need to consider in order to protect our world’s performance.</p>
        <p>The metacloud builder will present the following forms and materials:</p>
        <ul>
          <li>Bodies: a body is just a copy of a geometry. For example, a motorbike might have three bodies: the frame and two wheels. By copying similar geometries, we can save resources.</li>
          <li>Geometries: these define different simple shapes, like for example a wheel.</li>
          <li>Materials: by describing how a model or shape should look, materials make your scenes more realistic. They change the way light is emitted from different models, and can include different textures.</li>
          <li>Triangles: every surface of a body is presented like a triangle. Complex models have more triangles than simpler models!</li>
          <li>Textures: these are the images used in materials. Textures are images of different patterns and colors - like grass, water, stones.</li>
          <li>Entities: an entity may include one or more bodies, like the motor bike in the example above. Entities include everything you need for an asset: the geometries, bodies, materials, and textures as well.</li>
        </ul>
        <h4>Am I going to be able to upload custom assets?</h4>
        <p>You can import 3D models in <b>.gltf</b> and <b>.glb</b> formats.</p>
        <h4>Am I going to be able to deploy my scene to my land?</h4>
        <p>Permissions will be granted on different metacloud sections to do so. Make sure to have the Metamask or Dapper account that owns the parcels.</p>
        <h4>Can I share my scenes with other Builder users?</h4>
        <p>The Share button will be presented on screen for you to share a link or a post on different social networks that can let others view and explore the scene as players.</p>
        <h4>Can I snap/attach items to other items?</h4>
        <p>No, but you can press and hold Shift for more precise placement when moving objects.</p>
        <h4>How does Preview mode work?</h4>
        <p>Use the W, A, S, and D keys to move around in Preview mode, and Space to jump. If you can’t move, you may be stuck in an object. Changing where you spawn (enter the scene) is a feature we have planned for the future.</p>
        <h4>Can I pick the color or texture of items?</h4>
        <p>Right now, all of the models come with one texture, but we agree that it’d be awesome to have more control over each model’s appearance. You can however export a 3D model, edit it in a 3D modeling tool, and import it again into a custom asset pack.</p>
        <h4>Where can I find the default Builder 3D models if I want to edit them?</h4>
        <p>You can find all of these models in this repo. You can also add the models you wish to a scene in the Builder and then export that scene, and you’ll find the used models in a folder.</p>
      </div>
      `,
    },
    {
      slug: 'about-wearables',
      content_html: `
      <div class="intro-component-animation">
        <h1>About Wearables</h1>
        <p>When we talk about wearables, we talk about pants, t-shirts, jackets, shoes, glasses and everything made up to give your avatar the personality you want!</p>
        <p>Metacloud will present you with free of use wearables. But when it comes to creating your own, you will need to consider that our world supports the creation and use of custom wearables working under the non-fungible tokens (or NFTs). This allows a finite amount of different wearables to be minted or created on the blockchain.</p>
        <p>Wearables will be organized into different categories, depending on what part of an avatar they modify:</p>
        <ul>
          <li>Body shape (the shape of the entire avatar)</li>
          <li>Feet</li>
          <li>Upper body (e.g. jacket or shirt)</li>
          <li>Lower body (e.g. pants or shorts)</li>
          <li>Head</li>
          <li>Skin</li>
          <li>Facial hair</li>
          <li>Helmet</li>
          <li>Hat</li>
          <li>Hair</li>
        </ul>
        <p>Wearables may also include accessories that are applied to different parts of an avatar’s body:</p>
        <ul>
          <li>Mask</li>
          <li>Eye wear</li>
          <li>Earring</li>
          <li>Tiara (a crown, or other accessory that sits on top of the head)</li>
          <li>Top-head (e.g. a halo, or other effect applied to the head)</li>
        </ul>
        <h4>Collections & Items</h4>
        <p>It’s important to know that every wearable item can be minted to create multiple NFTs of that same item, to a limit according to the item’s rarity. Items are often referred to as the “representations” of the wearable.</p>
        <p>Items cannot be bought or sold, only the NFTs that have been minted from items. Also, individual items cannot be published on their own; they must be part of a collection.</p>
        <h6>Collections</h6>
        <p>Collections exist to help creators organize and manage their items before publication.</p>
        <p>For example, let’s say we create a blue t-shirt and a red t-shirt. We can create a new collection called “Summer T-Shirts”, and then add our two shirts to that collection. After publishing our collection, we can then mint copies of the red and blue shirts to share, trade, or sell.</p>
        <p>The following documentation only covers the Wearables Editor: the tool used to upload, add metadata to, and publish custom items and collections of items.</p>
        <p>Documentation covering other aspects will be coming soon.</p>
      </div>
      `,
    },
    {
      slug: '3d-model-essentials',
      content_html: `
      <div class="intro-component-animation">
        <h1><span class="number-text"><b>3</b></span>D model essentials</h1>
        <p>3D models are imported into metacloud in glTF format. There are a number of supported features that these models can include. This section goes over ways to make them compatible with metacloud and best practices.</p>
        <p>See Set entity position for information on how you can configure a 3D model in a metacloud scene to set its position, scale, etc.</p>
        <p>Keep in mind that all models, their shaders and their textures must be within the parameters of the scene limitations.</p>
        <h4>Supported 3D model formats</h4>
        <p>3D models in metacloud must be in glTF format. <a href="https://www.khronos.org/gltf" target="_blank">glTF</a> (GL Transmission Format) is an open project by Khronos providing a common format for 3D assets that is efficient and highly interoperable with modern web tech.</p>
        <p>Metacloud recommends using .gltf while you’re working on a scene, but then switching to .glb when uploading it!</p>
        <blockquote>Note: Animations must be embedded inside the glTF file to use in metacloud.</blockquote>
        <h6>Export to glTF from Blender</h6>
        <p>When exporting 3D models that include multiple animations, make sure that all animations are embedded in the model. To do this, open the NLA editor and click Stash to add each animation to the model.</p>
        <h6>Export to glTF from Maya</h6>
        <p>Maya doesn’t support exporting to glTF by default, but you can install a plugin to enable it.</p>
        <ol>
          <li>Install the plugin by following <a href="http://doc.babylonjs.com/resources/maya" target="_blank">these instructions</a>.</li>
          <li>Export glTF files using the plugin by following <a href="http://doc.babylonjs.com/resources/maya_to_gltf#pbr-materials" target="_blank">these instructions</a>.</li>
        </ol>
        <h6>Export to glTF from SketchUp</h6>
        <p>SketchUp doesn’t support exporting to glTF by default, but you can install a plugin to enable it!</p>
        <p>Download the plugin from <a href="https://extensions.sketchup.com/en/content/gltf-exporter" target="_blank">this link</a>.</p>
        <h6>Export to glTF from Unity</h6>
        <p>Unity doesn’t support exporting to glTF by default, but you can install a plugin to enable it!</p>
        <p>Download the plugin from <a href="https://github.com/sketchfab/Unity-glTF-Exporter" target="_blank">this link</a>.</p>
        <blockquote>Note: As an alternative, you can try <a href="https://assetstore.unity.com/packages/tools/utilities/collada-exporter-for-unity2017-99793" target="_blank">this other plugin</a> too.</blockquote>
        <h6>Export to glTF from 3D Studio Max</h6>
        <p>3D Studio Max doesn’t support exporting to glTF by default, but you can install a plugin to enable it.</p>
        <ol>
          <li>Download the plugin from <a href="https://github.com/BabylonJS/Exporters/tree/master/3ds%20Max" target="_blank">this link</a>.</li>
          <li>Install the plugin by following <a href="http://doc.babylonjs.com/resources/3dsmax#how-to-install-the-3ds-max-plugin" target="_blank">these instructions</a>.</li>
          <li>Export glTF files using the plugin by following <a href="http://doc.babylonjs.com/resources/3dsmax_to_gltf" target="_blank">these instructions</a>.</li>
        </ol>
        <h6>Preview a glTF model</h6>
        <p>A simple way to preview the contents of a glTF model before importing it into a scene is to use the <a href="https://sandbox.babylonjs.com/" target="_blank">Babylon.js Sandbox</a>. Use drag and drop the glTF file (and its .bin file if applicable) into the canvas to view the model.</p>
        <p>In the sandbox you can also view the animations that are embedded in the model, select which to display by picking it out of a dropdown menu.</p>
        <h6>This is why we use glTF</h6>
        <p>Compared to the older OBJ format, which supports only vertices, normals, texture coordinates, and basic materials, glTF provides a more powerful set of features that includes:</p>
        <ul>
          <li>Hierarchical objects</li>
          <li>Skeletal structure and animation</li>
          <li>More robust materials and shaders</li>
          <li>Scene information (light sources, cameras)</li>
        </ul>
        <p>Compared to COLLADA, the supported features are very similar. However, because glTF focuses on providing a “transmission format” rather than an editor format, it is more interoperable with web technologies.</p>
        <p>Consider this analogy: the .PSD (Adobe Photoshop) format is helpful for editing 2D images, but images must then be converted to .JPG for use on the web. In the same way, COLLADA may be used to edit a 3D asset, but glTF is a simpler way of transmitting it while rendering the same result.</p>
        <h6>Convert fbx into glTF</h6>
        <p>We recommend using these tools:</p>
        <ul>
          <li><a href="https://github.com/facebookincubator/FBX2glTF" target="_blank">Facebook’s CLI tool</a>: this is the most robust alternative, but requires using the command line.</li>
          <li><a href="https://modelconverter.com/convert.html" target="_blank">Modelconverter</a>: Another easy-to-use web based tool.</li>
        </ul>
      </div>
      `,
    },
  ];
}
