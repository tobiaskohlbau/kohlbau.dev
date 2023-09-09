{
  description = "kohlbau.dev";

  inputs.flake-utils.url = "github:numtide/flake-utils";
  inputs.nixpkgs-unstable.url = "github:nixos/nixpkgs/master";

  outputs = { self, nixpkgs, flake-utils, nixpkgs-unstable }:
    flake-utils.lib.eachDefaultSystem
      (system:
        let pkgs = import nixpkgs { inherit system; overlays = [ 
          (
            final: prev: {
              unstable = import nixpkgs-unstable { system = final.system; };
            }
          )
        ]; };
        in
        {
          devShells.default = import ./shell.nix { inherit pkgs; };
        }
      );
}
