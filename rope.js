class rope{
	constructor(body1,body2,pointA,pointB)
	{
		this.pointA = pointA
		this.pointB = pointB
		var options = {
			bodyA:body1,
			bodyB:body2,
			pointB:{x:this.pointA, y:this.pointB
			}

		}
	//create rope constraint here
		this.rope = Constraint.create(options)
		World.add(world,this.rope)
	}

    //create display() here 
	display() {
		var pointA = this.rope.bodyA.position
		var pointB = this.rope.bodyB.position 
		push()
		strokeWeight(2)
		stroke("black")
		line(pointA.x,pointA.y,pointB.x+this.pointA,pointB.y+this.pointB)
		pop()
	}

	

}
