
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
        <p>The metacloud is a decentralized virtual reality platform that allows users to create and participate through multiple amazing experiences.</p>
        <p>The 3D virtual space within Metacloud is called LAND, a non-fungible digital asset maintained in an BSC (Binance Smart Chain) smart contract which is divided into parcels that are identified by cartesian coordinates (x,y). The parcels are permanently owned by members of the community and are purchased using $CLOUD, Metacloud’s cryptocurrency token. This gives users full control over the environments and applications that they create, which can range from anything like static 3D scenes to more interactive applications or games.</p>
      </div>
      `,
    },
    {
      slug: 'faq',
      content_html: `
      <div class="intro-component-animation">
        <h1>​​FAQ</h1>
        <h5>What software do I need to play on the Metacloud?</h5>
        <p>A PC or Mac running Chrome, Firefox, Brave. .</p>

        <h5>Can I log in from multiple computers?</h5>
        <p>Yes, you can run Metacloud from multiple computers as long as you have your digital wallet installed on each machine.</p>

        <h5>Is this mobile responsive?</h5>
        <p>Mobile devices are not supported on the metacloud (yet).</p>

        <h5>Do I need a wallet to play in metacloud?</h5>
        <p>In order to live the full Metacloud experience, you’ll need  a digital wallet to serve you as an account that keeps all your digital assets and in-world progress absolutely safe..</p>
        <p>The metacloud experience without a digital wallet will have your information stored locally. Events, rewards or multiple device log in will not be possible.</p>

        <h5>What is $CLOUD?</h5>
        <p>$CLOUD is metacloud ’s fungible, BEP20 cryptocurrency token. $CLOUD is burned, or spent, in exchange for LAND parcels.</p>

        <h5>Will I be able to buy things other than LAND with $CLOUD?</h5>
        <p>Exactly, users will be able to trade $CLOUD with other users in exchange for goods and services hosted within Metacloud.</p>

        <h5>How can I get new wearables?</h5>
        <p>Exclusive wearables in the Metacloud will be available. But the free of charge avatar editor counts with an interesting selection of wearables and accessories.</p>

        <h5>Can I claim my Avatar name later?</h5>
        <p>You can visit the Names page in the Builder to claim it. All you need is an installed digital wallet and at least 100 $CLOUD to burn. Another alternative is to buy a name in the Metacloud Marketplace.</p>

        <h5>What is LAND?</h5>
        <p>LAND is a non-fungible digital asset maintained in an BSC smart contract. It’s divided into parcels that are referenced using unique x,y cartesian coordinates. Each LAND token includes a record of its coordinates, its owner, and a reference to a content description file or parcel manifest that describes and encodes the content the owner wishes to serve on his or her land.</p>

        <h5>What is an Estate?</h5>
        <p>Like LAND, an estate is a non-fungible digital asset. An estate is an association of two or more directly adjacent parcels of LAND. These parcels must be directly adjacent and cannot be separated by a road, plaza or any other parcel. By connecting parcels to form Estates, you can more easily manage your larger LAND holdings. Estates are especially useful when building larger scenes that span more than one parcel.</p>

        <h5>How can I buy LAND or Estates in Metacloud?</h5>
        <p>You will be able to visit  the Metacloud  Marketplace to browse through all of the available LANDs or Estates of LAND that are currently for sale.</p>

        <h5>What does ‘owning’ virtual LAND mean and how does it work?</h5>
        <p>LAND within Metacloud  is represented by non-fungible LAND tokens (meaning that each is unique and cannot be replicated) that track ownership on the BSC blockchain. Owning LAND within Metacloud  is akin to owning any other unique, crypto asset like <a href="https://www.cryptokitties.co/" target="_blank">CryptoKitties</a> or <a href="https://www.larvalabs.com/cryptopunks" target="_blank">CryptoPunks</a>, however you will be able to use your LAND within Metacloud  to build three dimensional spaces and applications. LAND is built on our BEP721 standard, making it a digital asset that can be traded with other users, like other digital assets.</p>

        <h5>Why is LAND scarce?</h5>
        <p>Like CryptoKitties and CryptoPunks, LAND is a non-fungible digital asset. To ensure that the value of LAND parcels remains stable, the amount of land in Metacloud  corresponds to the fixed, total amount of $CLOUD.</p>
        <p>Without LAND scarcity, many parcels would likely be left abandoned, negatively impacting the quality of content in Metacloud  and the user experience.</p>

        <h5>Is metacloud running on top of its own blockchain?</h5>
        <p>Metacloud uses the BSC blockchain to store and verify information about LAND ownership and LAND content. It does not run on its own independent blockchain. Content within Metacloud  is hosted and served to users via a network of community-owned content servers.</p>

        <h5>How are transactions validated?</h5>
        <p>The BSC LAND smart contract registers any changes to the state of a parcel of LAND, such as a change in the contents of the LAND or a transfer of ownership. These changes are recorded and verified by the BSC blockchain.</p>

        <h5>What if I lose my wallet?</h5>
        <p>It’s very important to keep your wallet recovery pass phrases safe. If those are lost, your name, avatar and wearables or NFT items will be lost.</p>

        <h5>How is content distributed?</h5>
        <p>The visual, audio and three dimensional content of Metacloud  will be stored in a network of content servers. Anyone can submit a server to join this network, but it must be voted on by the community. This is handled by a Decentralized Autonomous Organization (DAO). When you visit Metacloud , the content needed to render your location will be pulled from the content servers. Each LAND token, stored on the BSC blockchain, is associated with an x,y location within the world and links to the content for that location.</p>

        <h5>What’s the way to start creating at metacloud?</h5>
        <ul>
          <li>The Builder will provide you with sufficient pre-made items to build your experiences the way you prefer. You can also import and use your own custom 3D models.</li>
          <li>An SDK will be provided for writing code. The community will add amazing development to the metaverse.</li>
        </ul>
        <p>Both tools can also be combined. You can create a scene visually with the Builder, then export it and work with its code to add interactive functionality. You can also use the SDK to create <a href="https://docs.decentraland.org/development-guide/smart-items/" target="_blank">custom smart items</a> and place these using the Builder.</p>
        <p>You will be able to use tools like SketchUp, Blender, and Maya to create 3D models that you can then import into Metacloud , these models must be in .gltf or .glb format.</p>

        <h5>Am I able to control the content on my parcels?</h5>
        <p>Metacloud will present you with tools to control how content on your parcel is presented to other users within the platform. However, you should consider that whenever you upload content to the metacloud servers you are essentially making it publicly available since they are a distributed file system.</p>
        <p>Specifications on which other users can access your art gallery, your house or event can be managed. However, you need to consider that public content as 3D models will be always available to see for other users. They will notice your creations on the metacloud.</p>

        <h5>Am I able to report another user?</h5>
        <p>Click on another’s Avatar to see their profile, then click on the tab report. If you report a player, you will be able to bring a player’s conduct to the attention of Metacloud ’s Community.</p>

        <h5>Am I able to block another user/player?</h5>
        <p>Though you will still see them, those blocked players  won’t be able to address  you by chat.</p>
      </div>
      `,
    },
    {
      slug: 'dao',
      content_html: `
      <div class="intro-component-animation">
        <h1><b>What is Metacloud´s DAO?</b></h1>
        <p>Metacloud's decentralized autonomous organization (DAO) is a decision-making tool for $CLOUD and LAND holders in Metacloud's virtual environment. The community can award grants and amend the lists of prohibited names, POIs, and catalyst nodes via DAO votes. Additionally, the Metacloud´s DAO manages the LAND and Estate smart contracts.</p>
        <p>All of these proposals, as well as the votes cast, are kept in IPFS using Snapshot, a gas-free voting client. A committee uses a multi-sig wallet to adopt approved proposals with binding actions on the BSC blockchain. The Advisory Board Security (ABS), another multisig with trusted key holders, oversees this committee.</p>
        <p>The remainder of this document describes the DAO in further detail, including how it operates and what it can be used for.</p>
        </div>
        `,
      },
      {
        slug: 'smart-contracts-fuel-the-dao',
        content_html: `
        <div class="intro-component-animation">
          <h1><b>Smart contracts fuel the DAO</b></h1>
          <p>BSC expanded the capabilities of blockchains by enabling the decentralization of data management that goes beyond simple records of token ownership. BSC accomplished this by enabling individuals to create smart contracts and store them on a blockchain.</p>
          <p>All DAOs, or decentralized autonomous organizations, are part of a new way of managing organizations and making decisions enabled by BSC.</p>
        </div>
      `,
    },
    {
      slug: 'whitepaper',
      content_html: `
      <div class="intro-component-animation">
        <h1><b></b></h1>
      </div>
      `,
    },
    {
      slug: 'hardware-acceleration',
      content_html: `
      <div class="intro-component-animation">

      </div>
      `,
    },
  ];
}
