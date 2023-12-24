This is a [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

## Step 1: clone the repository

## Step 2: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 3: Start the Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your the app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# This App uses one Api, here is the link: https://github.com/profgabrielinfnet/musicapi
- # Music Api

### How to run the project?

# Getting Started
1. First, clone the repository
2. Run `npm install`
3. Run `npm run dev`

### Routes

_LOGIN_: **POST** `localhost:3000/user/login`
Request:
```
{
	    "username": "gabriel",
	    "password": "1234"
}
```
Response: 
```   
{
        "token": 18191787
    }
```

_REGISTER_: **POST** `localhost:3000/user/register`
Request:
```
{
	    "username": "gabriel",
	    "password": "1234"
}
```

Response: 
```   
{
	    "message": "user created successfully"
    }
```

_ALBUMS_: **GET** `localhost:3000/albums`
header: `Authorization: Bearer ${token}`
Request:
Response: 
```
[
	{
		"id": "1",
		"album": "Angra",
		"img": "https://m.media-amazon.com/images/I/51Yee8dkecL._UF1000,1000_QL80_.jpg"
	},
	{
		"id": "2",
		"album": "Legiao",
		"img": "https://www.vagalume.com.br/legiao-urbana/discografia/legiao-urbana.jpg"
	},
	{
		"id": "3",
		"album": "Iron maden",
		"img": "https://pbs.twimg.com/media/F9c7D_vX0AAkl7C?format=jpg&name=large"
	},
	{
		"id": "4",
		"album": "Guns",
		"img": "https://www12.senado.leg.br/radio/1/capitulo-rock/2020/01/31/guns-n2019-roses/guns_n_roses.jpg/@@images/24c8f793-0823-4756-b0e7-3c1f1b71fb1e.jpeg"
	}
]
```
_STORIES_: **GET** `localhost:3000/stories`
header: `Authorization: Bearer ${token}`
Request:
Response: 
```
	{
		"id": "1",
		"name: "Nathanzinho",
		 img: "https://uploads.metropoles.com/wp-content/uploads/2022/08/17164733/WhatsApp-Image-2022-08-17-at-16.36.56-835x1024.jpeg"
	},
	{
		"id": "2",
		"name: "Anderson Paak",
		 "img: "https://monkeybuzz.com.br/wp-content/uploads/2019/06/hollie-fernando-1920x1280.jpg",
	},
	{
		"id": "3",
		"name: "Beyonce",
		"img: "https://i.em.com.br/I-gX53eZOL0FN60bnwMrmcgTRo4=/750x0/smart/imgsapp.em.com.br/app/noticia_127983242361/2023/08/09/1543194/beyonce_1_83139.jpg",
	},
	{
		"id": "4",
		"name: "Madonna",
		"img: "https://veja.abril.com.br/wp-content/uploads/2022/03/Madonna.jpg.jpg?quality=90&strip=info&w=680&h=453&crop=1",
  }
]
```
