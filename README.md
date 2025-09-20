update:
trying out the responsive design (for mobile view it is suggested to use "sm")
but when tried it is not producing responsive design as expected (working on differrent screen size)


MOCK DATA:
[
  {
    "id": "bitcoin",
    "symbol": "btc",
    "name": "Bitcoin",
    "image": "<https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400>",
    "current_price": 70187,
    "market_cap": 1381651251183,
    "market_cap_rank": 1,
    "fully_diluted_valuation": 1474623675796,
    "total_volume": 20154184933,
    "high_24h": 70215,
    "low_24h": 68060,
    "price_change_24h": 2126.88,
    "price_change_percentage_24h": 3.12502,
    "market_cap_change_24h": 44287678051,
    "market_cap_change_percentage_24h": 3.31157,
    "circulating_supply": 19675987,
    "total_supply": 21000000,
    "max_supply": 21000000,
    "ath": 73738,
    "ath_change_percentage": -4.77063,
    "ath_date": "2024-03-14T07:10:36.635Z",
    "atl": 67.81,
    "atl_change_percentage": 103455.83335,
    "atl_date": "2013-07-06T00:00:00.000Z",
    "roi": null,
    "last_updated": "2024-04-07T16:49:31.736Z"
  }
]


API:

for fetchign the whole data:
(1)
https://api.geckoterminal.com/api/v2/tokens/info_recently_updated


for fetching the price details:
(2)
https://api.geckoterminal.com/api/v2/networks/eth/tokens/0x95e40e065afb3059dcabe4aaf404c1f92756603a

in this we need to changed the "eth" and "0x95e40e065afb3059dcabe4aaf404c1f92756603a" from the (1st) API results 

Structure:
  
# Home
    # portfolio container
        # donut chart
        # watchlist container
            #watchlist

    # add token popup
        # listofcoins
        #footer








installations:
vite
tailwind





 <!-- issue created token  -->

<!-- from API-1 -->
<!-- 
 {
      "id": "polygon_pos_0x9e7e2c71463e4ba32f79826d7edf6393dca28915",
      "type": "token",
      "attributes": {
        "address": "0x9e7e2c71463e4ba32f79826d7edf6393dca28915",
        "name": "Nakama Coin",
        "symbol": "NAKAMA",
        "decimals": 18,
        "image_url": "https://assets.geckoterminal.com/zllri8933kzpomm92tojzlv2s9kh",
        "coingecko_coin_id": null,
        "websites": [
          "https://nakama-coin.github.io/nakama-coin",
          "https://nakama-coin.com"
        ],
        "discord_url": "https://discord.gg/ahuVrNCd",
        "telegram_handle": "NakamaCoin",
        "twitter_handle": "Nakama_Coin",
        "description": "The first anime cryptocurrency that rewards social connections. Named after 仲間 (nakama/friendship), we're building an economy where your anime community has real value. Features: friend rewards, group discounts, creator tipping. Live on Polygon. Transform how 800M+ anime fans connect and transact.",
        "gt_score": 58.4097247706422,
        "metadata_updated_at": "2025-09-10T11:08:17Z"
      },
      "relationships": {
        "network": {
          "data": {
            "id": "polygon_pos",
            "type": "network"
          }
        }
      }
    }, -->

