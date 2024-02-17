import java.util.*;

class Player {

    @SuppressWarnings({ "resource", "unused" })
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);
        int W = in.nextInt(); // width of the building.
        int H = in.nextInt(); // height of the building.
        int N = in.nextInt(); // maximum number of turns before game over.
        int X0 = in.nextInt();
        int Y0 = in.nextInt();

        int curX = X0;
        int curY = Y0;

        PossibleBombSquare possibleBombSquare = new PossibleBombSquare(0, W, 0, H);

        // game loop
        while (true) {
            String bombDir = in.next(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)

            char firstDir = bombDir.charAt(0);

            possibleBombSquare.recalculate(firstDir, curX, curY);

            if (bombDir.length() == 1){
                possibleBombSquare.foundOneDimension(firstDir, curX, curY);
            } else {
                char secondDir = bombDir.charAt(1);
                possibleBombSquare.recalculate(secondDir, curX, curY);
            }

            curX = possibleBombSquare.getHalfX();
            curY = possibleBombSquare.getHalfY();
            
            // the location of the next window Batman should jump to.
            System.out.println(curX + " " + curY);
        }
    }

    public static class PossibleBombSquare{
        private int minX;
        private int maxX; 
        private int minY; 
        private int maxY;

        public PossibleBombSquare(int minX, int maxX, int minY, int maxY){
            this.minX = minX;
            this.maxX = maxX;
            this.minY = minY;
            this.maxY = maxY;
        }

        public void recalculate(char direction, int curX, int curY){
            switch (direction) {
                case 'L' -> maxX = Math.min(maxX, curX - 1);
                case 'R' -> minX = Math.max(minX, curX + 1);
                case 'D' -> minY = Math.max(minY, curY + 1);
                case 'U' -> maxY = Math.min(maxY, curY - 1);
                default -> throw new IllegalArgumentException("Only L,R,U,D allowed as directions");
            }
        }

        public void foundOneDimension(char direction, int curX, int curY) {
			switch (direction) {
                case 'U', 'D' -> {
                    minX = curX;
                    maxX = curX;
                }
                case 'R', 'L' -> {
                    minY = curY;
                    maxY = curY;
                }
                default -> throw new IllegalArgumentException("Only L,R,U,D allowed as directions");
            }
		}

        public int getHalfX() {
			return (minX + maxX) / 2;
		}

        public int getHalfY() {
			return (minY + maxY) / 2;
		}
    }
}

