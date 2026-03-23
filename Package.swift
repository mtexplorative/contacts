// swift-tools-version:5.7
import PackageDescription

let package = Package(
    name: "ContactsPlugin",
    platforms: [
        .iOS(.v13)
    ],
    products: [
        .library(
            name: "ContactsPlugin",
            targets: ["ContactsPlugin"]
        )
    ],
    dependencies: [
        .package(
            url: "https://github.com/ionic-team/capacitor-swift-pm.git",
            from: "8.0.0"
        )
    ],
    targets: [
        .target(
            name: "ContactsPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm")
            ],
            path: ".",
            sources: [
                "."
            ]
        )
    ]
)