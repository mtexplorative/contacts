// swift-tools-version: 5.9
// Package.swift  –  liegt im Plugin-Root-Verzeichnis (neben package.json)

import PackageDescription

let package = Package(
    name: "CapacitorCommunityContacts",
    platforms: [
        .iOS(.v15)   // Minimum iOS-Version – an dein Projekt anpassen
    ],
    products: [
        .library(
            name: "CapacitorCommunityContacts",
            targets: ["CapacitorCommunityContacts"]
        )
    ],
    dependencies: [
        // Capacitor als SPM-Dependency
        .package(
            url: "https://github.com/ionic-team/capacitor-swift-pm.git",
            from: "8.0.0"
        )
    ],
    targets: [
        .target(
            name: "CapacitorCommunityContacts",
            dependencies: [
                .product(name: "Capacitor",  package: "capacitor-swift-pm"),
                .product(name: "Cordova",    package: "capacitor-swift-pm"),
            ],
            path: "ios/Sources/ContactsPlugin"
        ),
        // .testTarget(
        //     name: "MyPluginTests",
        //     dependencies: ["ContactsPlugin"],
        //     path: "ios/Tests/MyPluginTests"
        // )
    ]
)
