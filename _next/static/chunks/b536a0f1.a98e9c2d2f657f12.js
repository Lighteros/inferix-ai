"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [367],
  {
    7274: (e, n, t) => {
      t.d(n, { JeP: () => nL });
      var i = t(337);
      function r() {
        let e = null,
          n = !1,
          t = null,
          i = null;
        function r(n, a) {
          t(n, a), (i = e.requestAnimationFrame(r));
        }
        return {
          start: function () {
            !0 !== n &&
              null !== t &&
              ((i = e.requestAnimationFrame(r)), (n = !0));
          },
          stop: function () {
            e.cancelAnimationFrame(i), (n = !1);
          },
          setAnimationLoop: function (e) {
            t = e;
          },
          setContext: function (n) {
            e = n;
          },
        };
      }
      function a(e) {
        let n = new WeakMap();
        return {
          get: function (e) {
            return e.isInterleavedBufferAttribute && (e = e.data), n.get(e);
          },
          remove: function (t) {
            t.isInterleavedBufferAttribute && (t = t.data);
            let i = n.get(t);
            i && (e.deleteBuffer(i.buffer), n.delete(t));
          },
          update: function (t, i) {
            if (
              (t.isInterleavedBufferAttribute && (t = t.data),
              t.isGLBufferAttribute)
            ) {
              let e = n.get(t);
              (!e || e.version < t.version) &&
                n.set(t, {
                  buffer: t.buffer,
                  type: t.type,
                  bytesPerElement: t.elementSize,
                  version: t.version,
                });
              return;
            }
            let r = n.get(t);
            if (void 0 === r)
              n.set(
                t,
                (function (n, t) {
                  let i;
                  let r = n.array,
                    a = n.usage,
                    o = r.byteLength,
                    l = e.createBuffer();
                  if (
                    (e.bindBuffer(t, l),
                    e.bufferData(t, r, a),
                    n.onUploadCallback(),
                    r instanceof Float32Array)
                  )
                    i = e.FLOAT;
                  else if (r instanceof Uint16Array)
                    i = n.isFloat16BufferAttribute
                      ? e.HALF_FLOAT
                      : e.UNSIGNED_SHORT;
                  else if (r instanceof Int16Array) i = e.SHORT;
                  else if (r instanceof Uint32Array) i = e.UNSIGNED_INT;
                  else if (r instanceof Int32Array) i = e.INT;
                  else if (r instanceof Int8Array) i = e.BYTE;
                  else if (r instanceof Uint8Array) i = e.UNSIGNED_BYTE;
                  else if (r instanceof Uint8ClampedArray) i = e.UNSIGNED_BYTE;
                  else
                    throw Error(
                      "THREE.WebGLAttributes: Unsupported buffer data format: " +
                        r
                    );
                  return {
                    buffer: l,
                    type: i,
                    bytesPerElement: r.BYTES_PER_ELEMENT,
                    version: n.version,
                    size: o,
                  };
                })(t, i)
              );
            else if (r.version < t.version) {
              if (r.size !== t.array.byteLength)
                throw Error(
                  "THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported."
                );
              !(function (n, t, i) {
                let r = t.array,
                  a = t.updateRanges;
                if ((e.bindBuffer(i, n), 0 === a.length))
                  e.bufferSubData(i, 0, r);
                else {
                  a.sort((e, n) => e.start - n.start);
                  let n = 0;
                  for (let e = 1; e < a.length; e++) {
                    let t = a[n],
                      i = a[e];
                    i.start <= t.start + t.count + 1
                      ? (t.count = Math.max(
                          t.count,
                          i.start + i.count - t.start
                        ))
                      : (a[++n] = i);
                  }
                  a.length = n + 1;
                  for (let n = 0, t = a.length; n < t; n++) {
                    let t = a[n];
                    e.bufferSubData(
                      i,
                      t.start * r.BYTES_PER_ELEMENT,
                      r,
                      t.start,
                      t.count
                    );
                  }
                  t.clearUpdateRanges();
                }
                t.onUploadCallback();
              })(r.buffer, t, i),
                (r.version = t.version);
            }
          },
        };
      }
      let o = {
          alphahash_fragment:
            "#ifdef USE_ALPHAHASH\n	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;\n#endif",
          alphahash_pars_fragment:
            "#ifdef USE_ALPHAHASH\n	const float ALPHA_HASH_SCALE = 0.05;\n	float hash2D( vec2 value ) {\n		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );\n	}\n	float hash3D( vec3 value ) {\n		return hash2D( vec2( hash2D( value.xy ), value.z ) );\n	}\n	float getAlphaHashThreshold( vec3 position ) {\n		float maxDeriv = max(\n			length( dFdx( position.xyz ) ),\n			length( dFdy( position.xyz ) )\n		);\n		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );\n		vec2 pixScales = vec2(\n			exp2( floor( log2( pixScale ) ) ),\n			exp2( ceil( log2( pixScale ) ) )\n		);\n		vec2 alpha = vec2(\n			hash3D( floor( pixScales.x * position.xyz ) ),\n			hash3D( floor( pixScales.y * position.xyz ) )\n		);\n		float lerpFactor = fract( log2( pixScale ) );\n		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;\n		float a = min( lerpFactor, 1.0 - lerpFactor );\n		vec3 cases = vec3(\n			x * x / ( 2.0 * a * ( 1.0 - a ) ),\n			( x - 0.5 * a ) / ( 1.0 - a ),\n			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )\n		);\n		float threshold = ( x < ( 1.0 - a ) )\n			? ( ( x < a ) ? cases.x : cases.y )\n			: cases.z;\n		return clamp( threshold , 1.0e-6, 1.0 );\n	}\n#endif",
          alphamap_fragment:
            "#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;\n#endif",
          alphamap_pars_fragment:
            "#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif",
          alphatest_fragment:
            "#ifdef USE_ALPHATEST\n	#ifdef ALPHA_TO_COVERAGE\n	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );\n	if ( diffuseColor.a == 0.0 ) discard;\n	#else\n	if ( diffuseColor.a < alphaTest ) discard;\n	#endif\n#endif",
          alphatest_pars_fragment:
            "#ifdef USE_ALPHATEST\n	uniform float alphaTest;\n#endif",
          aomap_fragment:
            "#ifdef USE_AOMAP\n	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;\n	reflectedLight.indirectDiffuse *= ambientOcclusion;\n	#if defined( USE_CLEARCOAT ) \n		clearcoatSpecularIndirect *= ambientOcclusion;\n	#endif\n	#if defined( USE_SHEEN ) \n		sheenSpecularIndirect *= ambientOcclusion;\n	#endif\n	#if defined( USE_ENVMAP ) && defined( STANDARD )\n		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );\n		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n	#endif\n#endif",
          aomap_pars_fragment:
            "#ifdef USE_AOMAP\n	uniform sampler2D aoMap;\n	uniform float aoMapIntensity;\n#endif",
          batching_pars_vertex:
            "#ifdef USE_BATCHING\n	#if ! defined( GL_ANGLE_multi_draw )\n	#define gl_DrawID _gl_DrawID\n	uniform int _gl_DrawID;\n	#endif\n	uniform highp sampler2D batchingTexture;\n	uniform highp usampler2D batchingIdTexture;\n	mat4 getBatchingMatrix( const in float i ) {\n		int size = textureSize( batchingTexture, 0 ).x;\n		int j = int( i ) * 4;\n		int x = j % size;\n		int y = j / size;\n		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );\n		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );\n		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );\n		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );\n		return mat4( v1, v2, v3, v4 );\n	}\n	float getIndirectIndex( const in int i ) {\n		int size = textureSize( batchingIdTexture, 0 ).x;\n		int x = i % size;\n		int y = i / size;\n		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );\n	}\n#endif\n#ifdef USE_BATCHING_COLOR\n	uniform sampler2D batchingColorTexture;\n	vec3 getBatchingColor( const in float i ) {\n		int size = textureSize( batchingColorTexture, 0 ).x;\n		int j = int( i );\n		int x = j % size;\n		int y = j / size;\n		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;\n	}\n#endif",
          batching_vertex:
            "#ifdef USE_BATCHING\n	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );\n#endif",
          begin_vertex:
            "vec3 transformed = vec3( position );\n#ifdef USE_ALPHAHASH\n	vPosition = vec3( position );\n#endif",
          beginnormal_vertex:
            "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n	vec3 objectTangent = vec3( tangent.xyz );\n#endif",
          bsdfs:
            "float G_BlinnPhong_Implicit( ) {\n	return 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( specularColor, 1.0, dotVH );\n	float G = G_BlinnPhong_Implicit( );\n	float D = D_BlinnPhong( shininess, dotNH );\n	return F * ( G * D );\n} // validated",
          iridescence_fragment:
            "#ifdef USE_IRIDESCENCE\n	const mat3 XYZ_TO_REC709 = mat3(\n		 3.2404542, -0.9692660,  0.0556434,\n		-1.5371385,  1.8760108, -0.2040259,\n		-0.4985314,  0.0415560,  1.0572252\n	);\n	vec3 Fresnel0ToIor( vec3 fresnel0 ) {\n		vec3 sqrtF0 = sqrt( fresnel0 );\n		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );\n	}\n	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {\n		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );\n	}\n	float IorToFresnel0( float transmittedIor, float incidentIor ) {\n		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));\n	}\n	vec3 evalSensitivity( float OPD, vec3 shift ) {\n		float phase = 2.0 * PI * OPD * 1.0e-9;\n		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );\n		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );\n		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );\n		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );\n		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );\n		xyz /= 1.0685e-7;\n		vec3 rgb = XYZ_TO_REC709 * xyz;\n		return rgb;\n	}\n	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {\n		vec3 I;\n		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );\n		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );\n		float cosTheta2Sq = 1.0 - sinTheta2Sq;\n		if ( cosTheta2Sq < 0.0 ) {\n			return vec3( 1.0 );\n		}\n		float cosTheta2 = sqrt( cosTheta2Sq );\n		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );\n		float R12 = F_Schlick( R0, 1.0, cosTheta1 );\n		float T121 = 1.0 - R12;\n		float phi12 = 0.0;\n		if ( iridescenceIOR < outsideIOR ) phi12 = PI;\n		float phi21 = PI - phi12;\n		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );\n		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );\n		vec3 phi23 = vec3( 0.0 );\n		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;\n		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;\n		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;\n		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;\n		vec3 phi = vec3( phi21 ) + phi23;\n		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );\n		vec3 r123 = sqrt( R123 );\n		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );\n		vec3 C0 = R12 + Rs;\n		I = C0;\n		vec3 Cm = Rs - T121;\n		for ( int m = 1; m <= 2; ++ m ) {\n			Cm *= r123;\n			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );\n			I += Cm * Sm;\n		}\n		return max( I, vec3( 0.0 ) );\n	}\n#endif",
          bumpmap_pars_fragment:
            "#ifdef USE_BUMPMAP\n	uniform sampler2D bumpMap;\n	uniform float bumpScale;\n	vec2 dHdxy_fwd() {\n		vec2 dSTdx = dFdx( vBumpMapUv );\n		vec2 dSTdy = dFdy( vBumpMapUv );\n		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;\n		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;\n		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;\n		return vec2( dBx, dBy );\n	}\n	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );\n		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );\n		vec3 vN = surf_norm;\n		vec3 R1 = cross( vSigmaY, vN );\n		vec3 R2 = cross( vN, vSigmaX );\n		float fDet = dot( vSigmaX, R1 ) * faceDirection;\n		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n		return normalize( abs( fDet ) * surf_norm - vGrad );\n	}\n#endif",
          clipping_planes_fragment:
            "#if NUM_CLIPPING_PLANES > 0\n	vec4 plane;\n	#ifdef ALPHA_TO_COVERAGE\n		float distanceToPlane, distanceGradient;\n		float clipOpacity = 1.0;\n		#pragma unroll_loop_start\n		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n			plane = clippingPlanes[ i ];\n			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n			distanceGradient = fwidth( distanceToPlane ) / 2.0;\n			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n			if ( clipOpacity == 0.0 ) discard;\n		}\n		#pragma unroll_loop_end\n		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n			float unionClipOpacity = 1.0;\n			#pragma unroll_loop_start\n			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n				plane = clippingPlanes[ i ];\n				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n				distanceGradient = fwidth( distanceToPlane ) / 2.0;\n				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n			}\n			#pragma unroll_loop_end\n			clipOpacity *= 1.0 - unionClipOpacity;\n		#endif\n		diffuseColor.a *= clipOpacity;\n		if ( diffuseColor.a == 0.0 ) discard;\n	#else\n		#pragma unroll_loop_start\n		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n			plane = clippingPlanes[ i ];\n			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n		}\n		#pragma unroll_loop_end\n		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n			bool clipped = true;\n			#pragma unroll_loop_start\n			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n				plane = clippingPlanes[ i ];\n				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n			}\n			#pragma unroll_loop_end\n			if ( clipped ) discard;\n		#endif\n	#endif\n#endif",
          clipping_planes_pars_fragment:
            "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
          clipping_planes_pars_vertex:
            "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n#endif",
          clipping_planes_vertex:
            "#if NUM_CLIPPING_PLANES > 0\n	vClipPosition = - mvPosition.xyz;\n#endif",
          color_fragment:
            "#if defined( USE_COLOR_ALPHA )\n	diffuseColor *= vColor;\n#elif defined( USE_COLOR )\n	diffuseColor.rgb *= vColor;\n#endif",
          color_pars_fragment:
            "#if defined( USE_COLOR_ALPHA )\n	varying vec4 vColor;\n#elif defined( USE_COLOR )\n	varying vec3 vColor;\n#endif",
          color_pars_vertex:
            "#if defined( USE_COLOR_ALPHA )\n	varying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )\n	varying vec3 vColor;\n#endif",
          color_vertex:
            "#if defined( USE_COLOR_ALPHA )\n	vColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )\n	vColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n	vColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n	vColor.xyz *= instanceColor.xyz;\n#endif\n#ifdef USE_BATCHING_COLOR\n	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );\n	vColor.xyz *= batchingColor.xyz;\n#endif",
          common:
            "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nvec3 pow2( const in vec3 x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }\nhighp float rand( const in vec2 uv ) {\n	const highp float a = 12.9898, b = 78.233, c = 43758.5453;\n	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n	return fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n	float precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n	float precisionSafeLength( vec3 v ) {\n		float maxComponent = max3( abs( v ) );\n		return length( v / maxComponent ) * maxComponent;\n	}\n#endif\nstruct IncidentLight {\n	vec3 color;\n	vec3 direction;\n	bool visible;\n};\nstruct ReflectedLight {\n	vec3 directDiffuse;\n	vec3 directSpecular;\n	vec3 indirectDiffuse;\n	vec3 indirectSpecular;\n};\n#ifdef USE_ALPHAHASH\n	varying vec3 vPosition;\n#endif\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nmat3 transposeMat3( const in mat3 m ) {\n	mat3 tmp;\n	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n	return tmp;\n}\nbool isPerspectiveMatrix( mat4 m ) {\n	return m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n	return vec2( u, v );\n}\nvec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n	return RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat F_Schlick( const in float f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n} // validated",
          cube_uv_reflection_fragment:
            "#ifdef ENVMAP_TYPE_CUBE_UV\n	#define cubeUV_minMipLevel 4.0\n	#define cubeUV_minTileSize 16.0\n	float getFace( vec3 direction ) {\n		vec3 absDirection = abs( direction );\n		float face = - 1.0;\n		if ( absDirection.x > absDirection.z ) {\n			if ( absDirection.x > absDirection.y )\n				face = direction.x > 0.0 ? 0.0 : 3.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		} else {\n			if ( absDirection.z > absDirection.y )\n				face = direction.z > 0.0 ? 2.0 : 5.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		}\n		return face;\n	}\n	vec2 getUV( vec3 direction, float face ) {\n		vec2 uv;\n		if ( face == 0.0 ) {\n			uv = vec2( direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 1.0 ) {\n			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n		} else if ( face == 2.0 ) {\n			uv = vec2( - direction.x, direction.y ) / abs( direction.z );\n		} else if ( face == 3.0 ) {\n			uv = vec2( - direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 4.0 ) {\n			uv = vec2( - direction.x, direction.z ) / abs( direction.y );\n		} else {\n			uv = vec2( direction.x, direction.y ) / abs( direction.z );\n		}\n		return 0.5 * ( uv + 1.0 );\n	}\n	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n		float face = getFace( direction );\n		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n		mipInt = max( mipInt, cubeUV_minMipLevel );\n		float faceSize = exp2( mipInt );\n		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;\n		if ( face > 2.0 ) {\n			uv.y += faceSize;\n			face -= 3.0;\n		}\n		uv.x += face * faceSize;\n		uv.x += filterInt * 3.0 * cubeUV_minTileSize;\n		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n		uv.x *= CUBEUV_TEXEL_WIDTH;\n		uv.y *= CUBEUV_TEXEL_HEIGHT;\n		#ifdef texture2DGradEXT\n			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;\n		#else\n			return texture2D( envMap, uv ).rgb;\n		#endif\n	}\n	#define cubeUV_r0 1.0\n	#define cubeUV_m0 - 2.0\n	#define cubeUV_r1 0.8\n	#define cubeUV_m1 - 1.0\n	#define cubeUV_r4 0.4\n	#define cubeUV_m4 2.0\n	#define cubeUV_r5 0.305\n	#define cubeUV_m5 3.0\n	#define cubeUV_r6 0.21\n	#define cubeUV_m6 4.0\n	float roughnessToMip( float roughness ) {\n		float mip = 0.0;\n		if ( roughness >= cubeUV_r1 ) {\n			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;\n		} else if ( roughness >= cubeUV_r4 ) {\n			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;\n		} else if ( roughness >= cubeUV_r5 ) {\n			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;\n		} else if ( roughness >= cubeUV_r6 ) {\n			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;\n		} else {\n			mip = - 2.0 * log2( 1.16 * roughness );		}\n		return mip;\n	}\n	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );\n		float mipF = fract( mip );\n		float mipInt = floor( mip );\n		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n		if ( mipF == 0.0 ) {\n			return vec4( color0, 1.0 );\n		} else {\n			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n			return vec4( mix( color0, color1, mipF ), 1.0 );\n		}\n	}\n#endif",
          defaultnormal_vertex:
            "vec3 transformedNormal = objectNormal;\n#ifdef USE_TANGENT\n	vec3 transformedTangent = objectTangent;\n#endif\n#ifdef USE_BATCHING\n	mat3 bm = mat3( batchingMatrix );\n	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );\n	transformedNormal = bm * transformedNormal;\n	#ifdef USE_TANGENT\n		transformedTangent = bm * transformedTangent;\n	#endif\n#endif\n#ifdef USE_INSTANCING\n	mat3 im = mat3( instanceMatrix );\n	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );\n	transformedNormal = im * transformedNormal;\n	#ifdef USE_TANGENT\n		transformedTangent = im * transformedTangent;\n	#endif\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n	transformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;\n	#ifdef FLIP_SIDED\n		transformedTangent = - transformedTangent;\n	#endif\n#endif",
          displacementmap_pars_vertex:
            "#ifdef USE_DISPLACEMENTMAP\n	uniform sampler2D displacementMap;\n	uniform float displacementScale;\n	uniform float displacementBias;\n#endif",
          displacementmap_vertex:
            "#ifdef USE_DISPLACEMENTMAP\n	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );\n#endif",
          emissivemap_fragment:
            "#ifdef USE_EMISSIVEMAP\n	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );\n	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE\n		emissiveColor = sRGBTransferEOTF( emissiveColor );\n	#endif\n	totalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
          emissivemap_pars_fragment:
            "#ifdef USE_EMISSIVEMAP\n	uniform sampler2D emissiveMap;\n#endif",
          colorspace_fragment:
            "gl_FragColor = linearToOutputTexel( gl_FragColor );",
          colorspace_pars_fragment:
            "vec4 LinearTransferOETF( in vec4 value ) {\n	return value;\n}\nvec4 sRGBTransferEOTF( in vec4 value ) {\n	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 sRGBTransferOETF( in vec4 value ) {\n	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}",
          envmap_fragment:
            "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vec3 cameraToFrag;\n		if ( isOrthographic ) {\n			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToFrag = normalize( vWorldPosition - cameraPosition );\n		}\n		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vec3 reflectVec = reflect( cameraToFrag, worldNormal );\n		#else\n			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n		#endif\n	#else\n		vec3 reflectVec = vReflect;\n	#endif\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n	#else\n		vec4 envColor = vec4( 0.0 );\n	#endif\n	#ifdef ENVMAP_BLENDING_MULTIPLY\n		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_MIX )\n		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_ADD )\n		outgoingLight += envColor.xyz * specularStrength * reflectivity;\n	#endif\n#endif",
          envmap_common_pars_fragment:
            "#ifdef USE_ENVMAP\n	uniform float envMapIntensity;\n	uniform float flipEnvMap;\n	uniform mat3 envMapRotation;\n	#ifdef ENVMAP_TYPE_CUBE\n		uniform samplerCube envMap;\n	#else\n		uniform sampler2D envMap;\n	#endif\n	\n#endif",
          envmap_pars_fragment:
            "#ifdef USE_ENVMAP\n	uniform float reflectivity;\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		varying vec3 vWorldPosition;\n		uniform float refractionRatio;\n	#else\n		varying vec3 vReflect;\n	#endif\n#endif",
          envmap_pars_vertex:
            "#ifdef USE_ENVMAP\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		\n		varying vec3 vWorldPosition;\n	#else\n		varying vec3 vReflect;\n		uniform float refractionRatio;\n	#endif\n#endif",
          envmap_physical_pars_fragment:
            "#ifdef USE_ENVMAP\n	vec3 getIBLIrradiance( const in vec3 normal ) {\n		#ifdef ENVMAP_TYPE_CUBE_UV\n			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );\n			return PI * envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n		#ifdef ENVMAP_TYPE_CUBE_UV\n			vec3 reflectVec = reflect( - viewDir, normal );\n			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );\n			return envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n	#ifdef USE_ANISOTROPY\n		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {\n			#ifdef ENVMAP_TYPE_CUBE_UV\n				vec3 bentNormal = cross( bitangent, viewDir );\n				bentNormal = normalize( cross( bentNormal, bitangent ) );\n				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );\n				return getIBLRadiance( viewDir, bentNormal, roughness );\n			#else\n				return vec3( 0.0 );\n			#endif\n		}\n	#endif\n#endif",
          envmap_vertex:
            "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vWorldPosition = worldPosition.xyz;\n	#else\n		vec3 cameraToVertex;\n		if ( isOrthographic ) {\n			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n		}\n		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vReflect = reflect( cameraToVertex, worldNormal );\n		#else\n			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n		#endif\n	#endif\n#endif",
          fog_vertex: "#ifdef USE_FOG\n	vFogDepth = - mvPosition.z;\n#endif",
          fog_pars_vertex: "#ifdef USE_FOG\n	varying float vFogDepth;\n#endif",
          fog_fragment:
            "#ifdef USE_FOG\n	#ifdef FOG_EXP2\n		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n	#else\n		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n	#endif\n	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
          fog_pars_fragment:
            "#ifdef USE_FOG\n	uniform vec3 fogColor;\n	varying float vFogDepth;\n	#ifdef FOG_EXP2\n		uniform float fogDensity;\n	#else\n		uniform float fogNear;\n		uniform float fogFar;\n	#endif\n#endif",
          gradientmap_pars_fragment:
            "#ifdef USE_GRADIENTMAP\n	uniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n	float dotNL = dot( normal, lightDirection );\n	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n	#ifdef USE_GRADIENTMAP\n		return vec3( texture2D( gradientMap, coord ).r );\n	#else\n		vec2 fw = fwidth( coord ) * 0.5;\n		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );\n	#endif\n}",
          lightmap_pars_fragment:
            "#ifdef USE_LIGHTMAP\n	uniform sampler2D lightMap;\n	uniform float lightMapIntensity;\n#endif",
          lights_lambert_fragment:
            "LambertMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularStrength = specularStrength;",
          lights_lambert_pars_fragment:
            "varying vec3 vViewPosition;\nstruct LambertMaterial {\n	vec3 diffuseColor;\n	float specularStrength;\n};\nvoid RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Lambert\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert",
          lights_pars_begin:
            "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\n#if defined( USE_LIGHT_PROBES )\n	uniform vec3 lightProbe[ 9 ];\n#endif\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n	float x = normal.x, y = normal.y, z = normal.z;\n	vec3 result = shCoefficients[ 0 ] * 0.886227;\n	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n	return result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n	return irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n	vec3 irradiance = ambientLightColor;\n	return irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n	if ( cutoffDistance > 0.0 ) {\n		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n	}\n	return distanceFalloff;\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n	return smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_DIR_LIGHTS > 0\n	struct DirectionalLight {\n		vec3 direction;\n		vec3 color;\n	};\n	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {\n		light.color = directionalLight.color;\n		light.direction = directionalLight.direction;\n		light.visible = true;\n	}\n#endif\n#if NUM_POINT_LIGHTS > 0\n	struct PointLight {\n		vec3 position;\n		vec3 color;\n		float distance;\n		float decay;\n	};\n	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {\n		vec3 lVector = pointLight.position - geometryPosition;\n		light.direction = normalize( lVector );\n		float lightDistance = length( lVector );\n		light.color = pointLight.color;\n		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n		light.visible = ( light.color != vec3( 0.0 ) );\n	}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n	struct SpotLight {\n		vec3 position;\n		vec3 direction;\n		vec3 color;\n		float distance;\n		float decay;\n		float coneCos;\n		float penumbraCos;\n	};\n	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {\n		vec3 lVector = spotLight.position - geometryPosition;\n		light.direction = normalize( lVector );\n		float angleCos = dot( light.direction, spotLight.direction );\n		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n		if ( spotAttenuation > 0.0 ) {\n			float lightDistance = length( lVector );\n			light.color = spotLight.color * spotAttenuation;\n			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n			light.visible = ( light.color != vec3( 0.0 ) );\n		} else {\n			light.color = vec3( 0.0 );\n			light.visible = false;\n		}\n	}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n	struct RectAreaLight {\n		vec3 color;\n		vec3 position;\n		vec3 halfWidth;\n		vec3 halfHeight;\n	};\n	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;\n	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n	struct HemisphereLight {\n		vec3 direction;\n		vec3 skyColor;\n		vec3 groundColor;\n	};\n	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n		float dotNL = dot( normal, hemiLight.direction );\n		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n		return irradiance;\n	}\n#endif",
          lights_toon_fragment:
            "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",
          lights_toon_pars_fragment:
            "varying vec3 vViewPosition;\nstruct ToonMaterial {\n	vec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Toon\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon",
          lights_phong_fragment:
            "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
          lights_phong_pars_fragment:
            "varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n	vec3 diffuseColor;\n	vec3 specularColor;\n	float specularShininess;\n	float specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_BlinnPhong\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong",
          lights_physical_fragment:
            "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef IOR\n	material.ior = ior;\n	#ifdef USE_SPECULAR\n		float specularIntensityFactor = specularIntensity;\n		vec3 specularColorFactor = specularColor;\n		#ifdef USE_SPECULAR_COLORMAP\n			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;\n		#endif\n		#ifdef USE_SPECULAR_INTENSITYMAP\n			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;\n		#endif\n		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n	#else\n		float specularIntensityFactor = 1.0;\n		vec3 specularColorFactor = vec3( 1.0 );\n		material.specularF90 = 1.0;\n	#endif\n	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );\n#else\n	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n	material.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n	material.clearcoat = clearcoat;\n	material.clearcoatRoughness = clearcoatRoughness;\n	material.clearcoatF0 = vec3( 0.04 );\n	material.clearcoatF90 = 1.0;\n	#ifdef USE_CLEARCOATMAP\n		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;\n	#endif\n	#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;\n	#endif\n	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n	material.clearcoatRoughness += geometryRoughness;\n	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_DISPERSION\n	material.dispersion = dispersion;\n#endif\n#ifdef USE_IRIDESCENCE\n	material.iridescence = iridescence;\n	material.iridescenceIOR = iridescenceIOR;\n	#ifdef USE_IRIDESCENCEMAP\n		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;\n	#endif\n	#ifdef USE_IRIDESCENCE_THICKNESSMAP\n		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;\n	#else\n		material.iridescenceThickness = iridescenceThicknessMaximum;\n	#endif\n#endif\n#ifdef USE_SHEEN\n	material.sheenColor = sheenColor;\n	#ifdef USE_SHEEN_COLORMAP\n		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;\n	#endif\n	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );\n	#ifdef USE_SHEEN_ROUGHNESSMAP\n		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;\n	#endif\n#endif\n#ifdef USE_ANISOTROPY\n	#ifdef USE_ANISOTROPYMAP\n		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );\n		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;\n		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;\n	#else\n		vec2 anisotropyV = anisotropyVector;\n	#endif\n	material.anisotropy = length( anisotropyV );\n	if( material.anisotropy == 0.0 ) {\n		anisotropyV = vec2( 1.0, 0.0 );\n	} else {\n		anisotropyV /= material.anisotropy;\n		material.anisotropy = saturate( material.anisotropy );\n	}\n	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );\n	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;\n	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;\n#endif",
          lights_physical_pars_fragment:
            "struct PhysicalMaterial {\n	vec3 diffuseColor;\n	float roughness;\n	vec3 specularColor;\n	float specularF90;\n	float dispersion;\n	#ifdef USE_CLEARCOAT\n		float clearcoat;\n		float clearcoatRoughness;\n		vec3 clearcoatF0;\n		float clearcoatF90;\n	#endif\n	#ifdef USE_IRIDESCENCE\n		float iridescence;\n		float iridescenceIOR;\n		float iridescenceThickness;\n		vec3 iridescenceFresnel;\n		vec3 iridescenceF0;\n	#endif\n	#ifdef USE_SHEEN\n		vec3 sheenColor;\n		float sheenRoughness;\n	#endif\n	#ifdef IOR\n		float ior;\n	#endif\n	#ifdef USE_TRANSMISSION\n		float transmission;\n		float transmissionAlpha;\n		float thickness;\n		float attenuationDistance;\n		vec3 attenuationColor;\n	#endif\n	#ifdef USE_ANISOTROPY\n		float anisotropy;\n		float alphaT;\n		vec3 anisotropyT;\n		vec3 anisotropyB;\n	#endif\n};\nvec3 clearcoatSpecularDirect = vec3( 0.0 );\nvec3 clearcoatSpecularIndirect = vec3( 0.0 );\nvec3 sheenSpecularDirect = vec3( 0.0 );\nvec3 sheenSpecularIndirect = vec3(0.0 );\nvec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {\n    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );\n    float x2 = x * x;\n    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );\n    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );\n}\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n	float a2 = pow2( alpha );\n	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n	return 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n	float a2 = pow2( alpha );\n	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n	return RECIPROCAL_PI * a2 / pow2( denom );\n}\n#ifdef USE_ANISOTROPY\n	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {\n		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );\n		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );\n		float v = 0.5 / ( gv + gl );\n		return saturate(v);\n	}\n	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {\n		float a2 = alphaT * alphaB;\n		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );\n		highp float v2 = dot( v, v );\n		float w2 = a2 / v2;\n		return RECIPROCAL_PI * a2 * pow2 ( w2 );\n	}\n#endif\n#ifdef USE_CLEARCOAT\n	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {\n		vec3 f0 = material.clearcoatF0;\n		float f90 = material.clearcoatF90;\n		float roughness = material.clearcoatRoughness;\n		float alpha = pow2( roughness );\n		vec3 halfDir = normalize( lightDir + viewDir );\n		float dotNL = saturate( dot( normal, lightDir ) );\n		float dotNV = saturate( dot( normal, viewDir ) );\n		float dotNH = saturate( dot( normal, halfDir ) );\n		float dotVH = saturate( dot( viewDir, halfDir ) );\n		vec3 F = F_Schlick( f0, f90, dotVH );\n		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n		float D = D_GGX( alpha, dotNH );\n		return F * ( V * D );\n	}\n#endif\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {\n	vec3 f0 = material.specularColor;\n	float f90 = material.specularF90;\n	float roughness = material.roughness;\n	float alpha = pow2( roughness );\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( f0, f90, dotVH );\n	#ifdef USE_IRIDESCENCE\n		F = mix( F, material.iridescenceFresnel, material.iridescence );\n	#endif\n	#ifdef USE_ANISOTROPY\n		float dotTL = dot( material.anisotropyT, lightDir );\n		float dotTV = dot( material.anisotropyT, viewDir );\n		float dotTH = dot( material.anisotropyT, halfDir );\n		float dotBL = dot( material.anisotropyB, lightDir );\n		float dotBV = dot( material.anisotropyB, viewDir );\n		float dotBH = dot( material.anisotropyB, halfDir );\n		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );\n		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );\n	#else\n		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n		float D = D_GGX( alpha, dotNH );\n	#endif\n	return F * ( V * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n	const float LUT_SIZE = 64.0;\n	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n	const float LUT_BIAS = 0.5 / LUT_SIZE;\n	float dotNV = saturate( dot( N, V ) );\n	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n	uv = uv * LUT_SCALE + LUT_BIAS;\n	return uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n	float l = length( f );\n	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n	float x = dot( v1, v2 );\n	float y = abs( x );\n	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n	float b = 3.4175940 + ( 4.1616724 + y ) * y;\n	float v = a / b;\n	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n	return cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n	vec3 lightNormal = cross( v1, v2 );\n	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n	vec3 T1, T2;\n	T1 = normalize( V - N * dot( V, N ) );\n	T2 = - cross( N, T1 );\n	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n	vec3 coords[ 4 ];\n	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n	coords[ 0 ] = normalize( coords[ 0 ] );\n	coords[ 1 ] = normalize( coords[ 1 ] );\n	coords[ 2 ] = normalize( coords[ 2 ] );\n	coords[ 3 ] = normalize( coords[ 3 ] );\n	vec3 vectorFormFactor = vec3( 0.0 );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n	return vec3( result );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n	float alpha = pow2( roughness );\n	float invAlpha = 1.0 / alpha;\n	float cos2h = dotNH * dotNH;\n	float sin2h = max( 1.0 - cos2h, 0.0078125 );\n	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float D = D_Charlie( sheenRoughness, dotNH );\n	float V = V_Neubelt( dotNV, dotNL );\n	return sheenColor * ( D * V );\n}\n#endif\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float r2 = roughness * roughness;\n	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;\n	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;\n	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );\n	return saturate( DG * RECIPROCAL_PI );\n}\nvec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n	vec4 r = roughness * c0 + c1;\n	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;\n	return fab;\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n	vec2 fab = DFGApprox( normal, viewDir, roughness );\n	return specularColor * fab.x + specularF90 * fab.y;\n}\n#ifdef USE_IRIDESCENCE\nvoid computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#else\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#endif\n	vec2 fab = DFGApprox( normal, viewDir, roughness );\n	#ifdef USE_IRIDESCENCE\n		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );\n	#else\n		vec3 Fr = specularColor;\n	#endif\n	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;\n	float Ess = fab.x + fab.y;\n	float Ems = 1.0 - Ess;\n	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n	singleScatter += FssEss;\n	multiScatter += Fms * Ems;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n		vec3 normal = geometryNormal;\n		vec3 viewDir = geometryViewDir;\n		vec3 position = geometryPosition;\n		vec3 lightPos = rectAreaLight.position;\n		vec3 halfWidth = rectAreaLight.halfWidth;\n		vec3 halfHeight = rectAreaLight.halfHeight;\n		vec3 lightColor = rectAreaLight.color;\n		float roughness = material.roughness;\n		vec3 rectCoords[ 4 ];\n		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n		vec2 uv = LTC_Uv( normal, viewDir, roughness );\n		vec4 t1 = texture2D( ltc_1, uv );\n		vec4 t2 = texture2D( ltc_2, uv );\n		mat3 mInv = mat3(\n			vec3( t1.x, 0, t1.y ),\n			vec3(    0, 1,    0 ),\n			vec3( t1.z, 0, t1.w )\n		);\n		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n	}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	#ifdef USE_CLEARCOAT\n		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );\n		vec3 ccIrradiance = dotNLcc * directLight.color;\n		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );\n	#endif\n	#ifdef USE_SHEEN\n		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );\n	#endif\n	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n	#ifdef USE_CLEARCOAT\n		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n	#endif\n	#ifdef USE_SHEEN\n		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );\n	#endif\n	vec3 singleScattering = vec3( 0.0 );\n	vec3 multiScattering = vec3( 0.0 );\n	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n	#ifdef USE_IRIDESCENCE\n		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );\n	#else\n		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );\n	#endif\n	vec3 totalScattering = singleScattering + multiScattering;\n	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );\n	reflectedLight.indirectSpecular += radiance * singleScattering;\n	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct				RE_Direct_Physical\n#define RE_Direct_RectArea		RE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular		RE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
          lights_fragment_begin:
            "\nvec3 geometryPosition = - vViewPosition;\nvec3 geometryNormal = normal;\nvec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\nvec3 geometryClearcoatNormal = vec3( 0.0 );\n#ifdef USE_CLEARCOAT\n	geometryClearcoatNormal = clearcoatNormal;\n#endif\n#ifdef USE_IRIDESCENCE\n	float dotNVi = saturate( dot( normal, geometryViewDir ) );\n	if ( material.iridescenceThickness == 0.0 ) {\n		material.iridescence = 0.0;\n	} else {\n		material.iridescence = saturate( material.iridescence );\n	}\n	if ( material.iridescence > 0.0 ) {\n		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );\n		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );\n	}\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n	PointLight pointLight;\n	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n	PointLightShadow pointLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		pointLight = pointLights[ i ];\n		getPointLightInfo( pointLight, geometryPosition, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n		pointLightShadow = pointLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n	SpotLight spotLight;\n	vec4 spotColor;\n	vec3 spotLightCoord;\n	bool inSpotLightMap;\n	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		spotLight = spotLights[ i ];\n		getSpotLightInfo( spotLight, geometryPosition, directLight );\n		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX\n		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS\n		#else\n		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n		#endif\n		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )\n			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;\n			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );\n			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );\n			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;\n		#endif\n		#undef SPOT_LIGHT_MAP_INDEX\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		spotLightShadow = spotLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n	DirectionalLight directionalLight;\n	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		directionalLight = directionalLights[ i ];\n		getDirectionalLightInfo( directionalLight, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n		directionalLightShadow = directionalLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n	RectAreaLight rectAreaLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n		rectAreaLight = rectAreaLights[ i ];\n		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n	vec3 iblIrradiance = vec3( 0.0 );\n	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n	#if defined( USE_LIGHT_PROBES )\n		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );\n	#endif\n	#if ( NUM_HEMI_LIGHTS > 0 )\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );\n		}\n		#pragma unroll_loop_end\n	#endif\n#endif\n#if defined( RE_IndirectSpecular )\n	vec3 radiance = vec3( 0.0 );\n	vec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
          lights_fragment_maps:
            "#if defined( RE_IndirectDiffuse )\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n		irradiance += lightMapIrradiance;\n	#endif\n	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n		iblIrradiance += getIBLIrradiance( geometryNormal );\n	#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n	#ifdef USE_ANISOTROPY\n		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );\n	#else\n		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );\n	#endif\n	#ifdef USE_CLEARCOAT\n		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );\n	#endif\n#endif",
          lights_fragment_end:
            "#if defined( RE_IndirectDiffuse )\n	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif",
          logdepthbuf_fragment:
            "#if defined( USE_LOGDEPTHBUF )\n	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
          logdepthbuf_pars_fragment:
            "#if defined( USE_LOGDEPTHBUF )\n	uniform float logDepthBufFC;\n	varying float vFragDepth;\n	varying float vIsPerspective;\n#endif",
          logdepthbuf_pars_vertex:
            "#ifdef USE_LOGDEPTHBUF\n	varying float vFragDepth;\n	varying float vIsPerspective;\n#endif",
          logdepthbuf_vertex:
            "#ifdef USE_LOGDEPTHBUF\n	vFragDepth = 1.0 + gl_Position.w;\n	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n#endif",
          map_fragment:
            "#ifdef USE_MAP\n	vec4 sampledDiffuseColor = texture2D( map, vMapUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );\n	#endif\n	diffuseColor *= sampledDiffuseColor;\n#endif",
          map_pars_fragment: "#ifdef USE_MAP\n	uniform sampler2D map;\n#endif",
          map_particle_fragment:
            "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n	#if defined( USE_POINTS_UV )\n		vec2 uv = vUv;\n	#else\n		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n	#endif\n#endif\n#ifdef USE_MAP\n	diffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
          map_particle_pars_fragment:
            "#if defined( USE_POINTS_UV )\n	varying vec2 vUv;\n#else\n	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n		uniform mat3 uvTransform;\n	#endif\n#endif\n#ifdef USE_MAP\n	uniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif",
          metalnessmap_fragment:
            "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );\n	metalnessFactor *= texelMetalness.b;\n#endif",
          metalnessmap_pars_fragment:
            "#ifdef USE_METALNESSMAP\n	uniform sampler2D metalnessMap;\n#endif",
          morphinstance_vertex:
            "#ifdef USE_INSTANCING_MORPH\n	float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;\n	}\n#endif",
          morphcolor_vertex:
            "#if defined( USE_MORPHCOLORS )\n	vColor *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		#if defined( USE_COLOR_ALPHA )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n		#elif defined( USE_COLOR )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n		#endif\n	}\n#endif",
          morphnormal_vertex:
            "#ifdef USE_MORPHNORMALS\n	objectNormal *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n	}\n#endif",
          morphtarget_pars_vertex:
            "#ifdef USE_MORPHTARGETS\n	#ifndef USE_INSTANCING_MORPH\n		uniform float morphTargetBaseInfluence;\n		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n	#endif\n	uniform sampler2DArray morphTargetsTexture;\n	uniform ivec2 morphTargetsTextureSize;\n	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n		int y = texelIndex / morphTargetsTextureSize.x;\n		int x = texelIndex - y * morphTargetsTextureSize.x;\n		ivec3 morphUV = ivec3( x, y, morphTargetIndex );\n		return texelFetch( morphTargetsTexture, morphUV, 0 );\n	}\n#endif",
          morphtarget_vertex:
            "#ifdef USE_MORPHTARGETS\n	transformed *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n	}\n#endif",
          normal_fragment_begin:
            "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n	vec3 fdx = dFdx( vViewPosition );\n	vec3 fdy = dFdy( vViewPosition );\n	vec3 normal = normalize( cross( fdx, fdy ) );\n#else\n	vec3 normal = normalize( vNormal );\n	#ifdef DOUBLE_SIDED\n		normal *= faceDirection;\n	#endif\n#endif\n#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )\n	#ifdef USE_TANGENT\n		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n	#else\n		mat3 tbn = getTangentFrame( - vViewPosition, normal,\n		#if defined( USE_NORMALMAP )\n			vNormalMapUv\n		#elif defined( USE_CLEARCOAT_NORMALMAP )\n			vClearcoatNormalMapUv\n		#else\n			vUv\n		#endif\n		);\n	#endif\n	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n		tbn[0] *= faceDirection;\n		tbn[1] *= faceDirection;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	#ifdef USE_TANGENT\n		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n	#else\n		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );\n	#endif\n	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n		tbn2[0] *= faceDirection;\n		tbn2[1] *= faceDirection;\n	#endif\n#endif\nvec3 nonPerturbedNormal = normal;",
          normal_fragment_maps:
            "#ifdef USE_NORMALMAP_OBJECTSPACE\n	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n	#ifdef FLIP_SIDED\n		normal = - normal;\n	#endif\n	#ifdef DOUBLE_SIDED\n		normal = normal * faceDirection;\n	#endif\n	normal = normalize( normalMatrix * normal );\n#elif defined( USE_NORMALMAP_TANGENTSPACE )\n	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n	mapN.xy *= normalScale;\n	normal = normalize( tbn * mapN );\n#elif defined( USE_BUMPMAP )\n	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif",
          normal_pars_fragment:
            "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif",
          normal_pars_vertex:
            "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif",
          normal_vertex:
            "#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n	#ifdef USE_TANGENT\n		vTangent = normalize( transformedTangent );\n		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n	#endif\n#endif",
          normalmap_pars_fragment:
            "#ifdef USE_NORMALMAP\n	uniform sampler2D normalMap;\n	uniform vec2 normalScale;\n#endif\n#ifdef USE_NORMALMAP_OBJECTSPACE\n	uniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )\n	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {\n		vec3 q0 = dFdx( eye_pos.xyz );\n		vec3 q1 = dFdy( eye_pos.xyz );\n		vec2 st0 = dFdx( uv.st );\n		vec2 st1 = dFdy( uv.st );\n		vec3 N = surf_norm;\n		vec3 q1perp = cross( q1, N );\n		vec3 q0perp = cross( N, q0 );\n		vec3 T = q1perp * st0.x + q0perp * st1.x;\n		vec3 B = q1perp * st0.y + q0perp * st1.y;\n		float det = max( dot( T, T ), dot( B, B ) );\n		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );\n		return mat3( T * scale, B * scale, N );\n	}\n#endif",
          clearcoat_normal_fragment_begin:
            "#ifdef USE_CLEARCOAT\n	vec3 clearcoatNormal = nonPerturbedNormal;\n#endif",
          clearcoat_normal_fragment_maps:
            "#ifdef USE_CLEARCOAT_NORMALMAP\n	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;\n	clearcoatMapN.xy *= clearcoatNormalScale;\n	clearcoatNormal = normalize( tbn2 * clearcoatMapN );\n#endif",
          clearcoat_pars_fragment:
            "#ifdef USE_CLEARCOATMAP\n	uniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform sampler2D clearcoatNormalMap;\n	uniform vec2 clearcoatNormalScale;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform sampler2D clearcoatRoughnessMap;\n#endif",
          iridescence_pars_fragment:
            "#ifdef USE_IRIDESCENCEMAP\n	uniform sampler2D iridescenceMap;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	uniform sampler2D iridescenceThicknessMap;\n#endif",
          opaque_fragment:
            "#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= material.transmissionAlpha;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );",
          packing:
            "vec3 packNormalToRGB( const in vec3 normal ) {\n	return normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n	return 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;\nconst float Inv255 = 1. / 255.;\nconst vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );\nconst vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );\nconst vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );\nconst vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );\nvec4 packDepthToRGBA( const in float v ) {\n	if( v <= 0.0 )\n		return vec4( 0., 0., 0., 0. );\n	if( v >= 1.0 )\n		return vec4( 1., 1., 1., 1. );\n	float vuf;\n	float af = modf( v * PackFactors.a, vuf );\n	float bf = modf( vuf * ShiftRight8, vuf );\n	float gf = modf( vuf * ShiftRight8, vuf );\n	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );\n}\nvec3 packDepthToRGB( const in float v ) {\n	if( v <= 0.0 )\n		return vec3( 0., 0., 0. );\n	if( v >= 1.0 )\n		return vec3( 1., 1., 1. );\n	float vuf;\n	float bf = modf( v * PackFactors.b, vuf );\n	float gf = modf( vuf * ShiftRight8, vuf );\n	return vec3( vuf * Inv255, gf * PackUpscale, bf );\n}\nvec2 packDepthToRG( const in float v ) {\n	if( v <= 0.0 )\n		return vec2( 0., 0. );\n	if( v >= 1.0 )\n		return vec2( 1., 1. );\n	float vuf;\n	float gf = modf( v * 256., vuf );\n	return vec2( vuf * Inv255, gf );\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n	return dot( v, UnpackFactors4 );\n}\nfloat unpackRGBToDepth( const in vec3 v ) {\n	return dot( v, UnpackFactors3 );\n}\nfloat unpackRGToDepth( const in vec2 v ) {\n	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;\n}\nvec4 pack2HalfToRGBA( const in vec2 v ) {\n	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( const in vec4 v ) {\n	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {\n	return depth * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {\n	return ( near * far ) / ( ( far - near ) * depth - far );\n}",
          premultiplied_alpha_fragment:
            "#ifdef PREMULTIPLIED_ALPHA\n	gl_FragColor.rgb *= gl_FragColor.a;\n#endif",
          project_vertex:
            "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_BATCHING\n	mvPosition = batchingMatrix * mvPosition;\n#endif\n#ifdef USE_INSTANCING\n	mvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
          dithering_fragment:
            "#ifdef DITHERING\n	gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
          dithering_pars_fragment:
            "#ifdef DITHERING\n	vec3 dithering( vec3 color ) {\n		float grid_position = rand( gl_FragCoord.xy );\n		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n		return color + dither_shift_RGB;\n	}\n#endif",
          roughnessmap_fragment:
            "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );\n	roughnessFactor *= texelRoughness.g;\n#endif",
          roughnessmap_pars_fragment:
            "#ifdef USE_ROUGHNESSMAP\n	uniform sampler2D roughnessMap;\n#endif",
          shadowmap_pars_fragment:
            "#if NUM_SPOT_LIGHT_COORDS > 0\n	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#if NUM_SPOT_LIGHT_MAPS > 0\n	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];\n#endif\n#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n		struct SpotLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n	}\n	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n		return unpackRGBATo2Half( texture2D( shadow, uv ) );\n	}\n	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n		float occlusion = 1.0;\n		vec2 distribution = texture2DDistribution( shadow, uv );\n		float hard_shadow = step( compare , distribution.x );\n		if (hard_shadow != 1.0 ) {\n			float distance = compare - distribution.x ;\n			float variance = max( 0.00000, distribution.y * distribution.y );\n			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n		}\n		return occlusion;\n	}\n	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n		float shadow = 1.0;\n		shadowCoord.xyz /= shadowCoord.w;\n		shadowCoord.z += shadowBias;\n		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n		if ( frustumTest ) {\n		#if defined( SHADOWMAP_TYPE_PCF )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx0 = - texelSize.x * shadowRadius;\n			float dy0 = - texelSize.y * shadowRadius;\n			float dx1 = + texelSize.x * shadowRadius;\n			float dy1 = + texelSize.y * shadowRadius;\n			float dx2 = dx0 / 2.0;\n			float dy2 = dy0 / 2.0;\n			float dx3 = dx1 / 2.0;\n			float dy3 = dy1 / 2.0;\n			shadow = (\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n			) * ( 1.0 / 17.0 );\n		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx = texelSize.x;\n			float dy = texelSize.y;\n			vec2 uv = shadowCoord.xy;\n			vec2 f = fract( uv * shadowMapSize + 0.5 );\n			uv -= f * texelSize;\n			shadow = (\n				texture2DCompare( shadowMap, uv, shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n					 f.x ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n					 f.x ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n					 f.y ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n					 f.y ) +\n				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),\n						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n						  f.x ),\n					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),\n						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n						  f.x ),\n					 f.y )\n			) * ( 1.0 / 9.0 );\n		#elif defined( SHADOWMAP_TYPE_VSM )\n			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n		#else\n			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n		#endif\n		}\n		return mix( 1.0, shadow, shadowIntensity );\n	}\n	vec2 cubeToUV( vec3 v, float texelSizeY ) {\n		vec3 absV = abs( v );\n		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n		absV *= scaleToCube;\n		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n		vec2 planar = v.xy;\n		float almostATexel = 1.5 * texelSizeY;\n		float almostOne = 1.0 - almostATexel;\n		if ( absV.z >= almostOne ) {\n			if ( v.z > 0.0 )\n				planar.x = 4.0 - v.x;\n		} else if ( absV.x >= almostOne ) {\n			float signX = sign( v.x );\n			planar.x = v.z * signX + 2.0 * signX;\n		} else if ( absV.y >= almostOne ) {\n			float signY = sign( v.y );\n			planar.x = v.x + 2.0 * signY + 2.0;\n			planar.y = v.z * signY - 2.0;\n		}\n		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n	}\n	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n		float shadow = 1.0;\n		vec3 lightToPosition = shadowCoord.xyz;\n		\n		float lightToPositionLength = length( lightToPosition );\n		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {\n			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;\n			vec3 bd3D = normalize( lightToPosition );\n			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n				shadow = (\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n				) * ( 1.0 / 9.0 );\n			#else\n				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n			#endif\n		}\n		return mix( 1.0, shadow, shadowIntensity );\n	}\n#endif",
          shadowmap_pars_vertex:
            "#if NUM_SPOT_LIGHT_COORDS > 0\n	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];\n	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		struct SpotLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n#endif",
          shadowmap_vertex:
            "#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )\n	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n	vec4 shadowWorldPosition;\n#endif\n#if defined( USE_SHADOWMAP )\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n		}\n		#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n		}\n		#pragma unroll_loop_end\n	#endif\n#endif\n#if NUM_SPOT_LIGHT_COORDS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {\n		shadowWorldPosition = worldPosition;\n		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;\n		#endif\n		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;\n	}\n	#pragma unroll_loop_end\n#endif",
          shadowmask_pars_fragment:
            "float getShadowMask() {\n	float shadow = 1.0;\n	#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n		directionalLight = directionalLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n		spotLight = spotLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n	PointLightShadow pointLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n		pointLight = pointLightShadows[ i ];\n		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#endif\n	return shadow;\n}",
          skinbase_vertex:
            "#ifdef USE_SKINNING\n	mat4 boneMatX = getBoneMatrix( skinIndex.x );\n	mat4 boneMatY = getBoneMatrix( skinIndex.y );\n	mat4 boneMatZ = getBoneMatrix( skinIndex.z );\n	mat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
          skinning_pars_vertex:
            "#ifdef USE_SKINNING\n	uniform mat4 bindMatrix;\n	uniform mat4 bindMatrixInverse;\n	uniform highp sampler2D boneTexture;\n	mat4 getBoneMatrix( const in float i ) {\n		int size = textureSize( boneTexture, 0 ).x;\n		int j = int( i ) * 4;\n		int x = j % size;\n		int y = j / size;\n		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );\n		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );\n		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );\n		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );\n		return mat4( v1, v2, v3, v4 );\n	}\n#endif",
          skinning_vertex:
            "#ifdef USE_SKINNING\n	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n	vec4 skinned = vec4( 0.0 );\n	skinned += boneMatX * skinVertex * skinWeight.x;\n	skinned += boneMatY * skinVertex * skinWeight.y;\n	skinned += boneMatZ * skinVertex * skinWeight.z;\n	skinned += boneMatW * skinVertex * skinWeight.w;\n	transformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
          skinnormal_vertex:
            "#ifdef USE_SKINNING\n	mat4 skinMatrix = mat4( 0.0 );\n	skinMatrix += skinWeight.x * boneMatX;\n	skinMatrix += skinWeight.y * boneMatY;\n	skinMatrix += skinWeight.z * boneMatZ;\n	skinMatrix += skinWeight.w * boneMatW;\n	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n	#ifdef USE_TANGENT\n		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n	#endif\n#endif",
          specularmap_fragment:
            "float specularStrength;\n#ifdef USE_SPECULARMAP\n	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );\n	specularStrength = texelSpecular.r;\n#else\n	specularStrength = 1.0;\n#endif",
          specularmap_pars_fragment:
            "#ifdef USE_SPECULARMAP\n	uniform sampler2D specularMap;\n#endif",
          tonemapping_fragment:
            "#if defined( TONE_MAPPING )\n	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
          tonemapping_pars_fragment:
            "#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n	return saturate( toneMappingExposure * color );\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	return saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 CineonToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	color = max( vec3( 0.0 ), color - 0.004 );\n	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n	return a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n	const mat3 ACESInputMat = mat3(\n		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),\n		vec3( 0.04823, 0.01566, 0.83777 )\n	);\n	const mat3 ACESOutputMat = mat3(\n		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),\n		vec3( -0.07367, -0.00605,  1.07602 )\n	);\n	color *= toneMappingExposure / 0.6;\n	color = ACESInputMat * color;\n	color = RRTAndODTFit( color );\n	color = ACESOutputMat * color;\n	return saturate( color );\n}\nconst mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(\n	vec3( 1.6605, - 0.1246, - 0.0182 ),\n	vec3( - 0.5876, 1.1329, - 0.1006 ),\n	vec3( - 0.0728, - 0.0083, 1.1187 )\n);\nconst mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(\n	vec3( 0.6274, 0.0691, 0.0164 ),\n	vec3( 0.3293, 0.9195, 0.0880 ),\n	vec3( 0.0433, 0.0113, 0.8956 )\n);\nvec3 agxDefaultContrastApprox( vec3 x ) {\n	vec3 x2 = x * x;\n	vec3 x4 = x2 * x2;\n	return + 15.5 * x4 * x2\n		- 40.14 * x4 * x\n		+ 31.96 * x4\n		- 6.868 * x2 * x\n		+ 0.4298 * x2\n		+ 0.1191 * x\n		- 0.00232;\n}\nvec3 AgXToneMapping( vec3 color ) {\n	const mat3 AgXInsetMatrix = mat3(\n		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),\n		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),\n		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )\n	);\n	const mat3 AgXOutsetMatrix = mat3(\n		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),\n		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),\n		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )\n	);\n	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;\n	color *= toneMappingExposure;\n	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;\n	color = AgXInsetMatrix * color;\n	color = max( color, 1e-10 );	color = log2( color );\n	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );\n	color = clamp( color, 0.0, 1.0 );\n	color = agxDefaultContrastApprox( color );\n	color = AgXOutsetMatrix * color;\n	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );\n	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;\n	color = clamp( color, 0.0, 1.0 );\n	return color;\n}\nvec3 NeutralToneMapping( vec3 color ) {\n	const float StartCompression = 0.8 - 0.04;\n	const float Desaturation = 0.15;\n	color *= toneMappingExposure;\n	float x = min( color.r, min( color.g, color.b ) );\n	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;\n	color -= offset;\n	float peak = max( color.r, max( color.g, color.b ) );\n	if ( peak < StartCompression ) return color;\n	float d = 1. - StartCompression;\n	float newPeak = 1. - d * d / ( peak + d - StartCompression );\n	color *= newPeak / peak;\n	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );\n	return mix( color, vec3( newPeak ), g );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",
          transmission_fragment:
            "#ifdef USE_TRANSMISSION\n	material.transmission = transmission;\n	material.transmissionAlpha = 1.0;\n	material.thickness = thickness;\n	material.attenuationDistance = attenuationDistance;\n	material.attenuationColor = attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;\n	#endif\n	vec3 pos = vWorldPosition;\n	vec3 v = normalize( cameraPosition - pos );\n	vec3 n = inverseTransformDirection( normal, viewMatrix );\n	vec4 transmitted = getIBLVolumeRefraction(\n		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,\n		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,\n		material.attenuationColor, material.attenuationDistance );\n	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );\n	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );\n#endif",
          transmission_pars_fragment:
            "#ifdef USE_TRANSMISSION\n	uniform float transmission;\n	uniform float thickness;\n	uniform float attenuationDistance;\n	uniform vec3 attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		uniform sampler2D transmissionMap;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		uniform sampler2D thicknessMap;\n	#endif\n	uniform vec2 transmissionSamplerSize;\n	uniform sampler2D transmissionSamplerMap;\n	uniform mat4 modelMatrix;\n	uniform mat4 projectionMatrix;\n	varying vec3 vWorldPosition;\n	float w0( float a ) {\n		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );\n	}\n	float w1( float a ) {\n		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );\n	}\n	float w2( float a ){\n		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );\n	}\n	float w3( float a ) {\n		return ( 1.0 / 6.0 ) * ( a * a * a );\n	}\n	float g0( float a ) {\n		return w0( a ) + w1( a );\n	}\n	float g1( float a ) {\n		return w2( a ) + w3( a );\n	}\n	float h0( float a ) {\n		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );\n	}\n	float h1( float a ) {\n		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );\n	}\n	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {\n		uv = uv * texelSize.zw + 0.5;\n		vec2 iuv = floor( uv );\n		vec2 fuv = fract( uv );\n		float g0x = g0( fuv.x );\n		float g1x = g1( fuv.x );\n		float h0x = h0( fuv.x );\n		float h1x = h1( fuv.x );\n		float h0y = h0( fuv.y );\n		float h1y = h1( fuv.y );\n		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +\n			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );\n	}\n	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {\n		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );\n		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );\n		vec2 fLodSizeInv = 1.0 / fLodSize;\n		vec2 cLodSizeInv = 1.0 / cLodSize;\n		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );\n		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );\n		return mix( fSample, cSample, fract( lod ) );\n	}\n	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n		vec3 modelScale;\n		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n		return normalize( refractionVector ) * thickness * modelScale;\n	}\n	float applyIorToRoughness( const in float roughness, const in float ior ) {\n		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n	}\n	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );\n	}\n	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n		if ( isinf( attenuationDistance ) ) {\n			return vec3( 1.0 );\n		} else {\n			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;\n		}\n	}\n	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,\n		const in vec3 attenuationColor, const in float attenuationDistance ) {\n		vec4 transmittedLight;\n		vec3 transmittance;\n		#ifdef USE_DISPERSION\n			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;\n			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );\n			for ( int i = 0; i < 3; i ++ ) {\n				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );\n				vec3 refractedRayExit = position + transmissionRay;\n		\n				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n				vec2 refractionCoords = ndcPos.xy / ndcPos.w;\n				refractionCoords += 1.0;\n				refractionCoords /= 2.0;\n		\n				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );\n				transmittedLight[ i ] = transmissionSample[ i ];\n				transmittedLight.a += transmissionSample.a;\n				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];\n			}\n			transmittedLight.a /= 3.0;\n		\n		#else\n		\n			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n			vec3 refractedRayExit = position + transmissionRay;\n			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n			vec2 refractionCoords = ndcPos.xy / ndcPos.w;\n			refractionCoords += 1.0;\n			refractionCoords /= 2.0;\n			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );\n		\n		#endif\n		vec3 attenuatedColor = transmittance * transmittedLight.rgb;\n		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;\n		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );\n	}\n#endif",
          uv_pars_fragment:
            "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	varying vec2 vUv;\n#endif\n#ifdef USE_MAP\n	varying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n	varying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n	varying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n	varying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n	varying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n	varying vec2 vNormalMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n	varying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n	varying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	varying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	varying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n	varying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	varying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	varying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	varying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	varying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	varying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	varying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n	varying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	varying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	varying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	uniform mat3 transmissionMapTransform;\n	varying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n	uniform mat3 thicknessMapTransform;\n	varying vec2 vThicknessMapUv;\n#endif",
          uv_pars_vertex:
            "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	varying vec2 vUv;\n#endif\n#ifdef USE_MAP\n	uniform mat3 mapTransform;\n	varying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform mat3 alphaMapTransform;\n	varying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n	uniform mat3 lightMapTransform;\n	varying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n	uniform mat3 aoMapTransform;\n	varying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n	uniform mat3 bumpMapTransform;\n	varying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n	uniform mat3 normalMapTransform;\n	varying vec2 vNormalMapUv;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n	uniform mat3 displacementMapTransform;\n	varying vec2 vDisplacementMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n	uniform mat3 emissiveMapTransform;\n	varying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n	uniform mat3 metalnessMapTransform;\n	varying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	uniform mat3 roughnessMapTransform;\n	varying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	uniform mat3 anisotropyMapTransform;\n	varying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n	uniform mat3 clearcoatMapTransform;\n	varying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform mat3 clearcoatNormalMapTransform;\n	varying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform mat3 clearcoatRoughnessMapTransform;\n	varying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	uniform mat3 sheenColorMapTransform;\n	varying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	uniform mat3 sheenRoughnessMapTransform;\n	varying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	uniform mat3 iridescenceMapTransform;\n	varying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	uniform mat3 iridescenceThicknessMapTransform;\n	varying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n	uniform mat3 specularMapTransform;\n	varying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	uniform mat3 specularColorMapTransform;\n	varying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	uniform mat3 specularIntensityMapTransform;\n	varying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	uniform mat3 transmissionMapTransform;\n	varying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n	uniform mat3 thicknessMapTransform;\n	varying vec2 vThicknessMapUv;\n#endif",
          uv_vertex:
            "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	vUv = vec3( uv, 1 ).xy;\n#endif\n#ifdef USE_MAP\n	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ALPHAMAP\n	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_LIGHTMAP\n	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_AOMAP\n	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_BUMPMAP\n	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_NORMALMAP\n	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_EMISSIVEMAP\n	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_METALNESSMAP\n	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOATMAP\n	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULARMAP\n	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_THICKNESSMAP\n	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;\n#endif",
          worldpos_vertex:
            "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0\n	vec4 worldPosition = vec4( transformed, 1.0 );\n	#ifdef USE_BATCHING\n		worldPosition = batchingMatrix * worldPosition;\n	#endif\n	#ifdef USE_INSTANCING\n		worldPosition = instanceMatrix * worldPosition;\n	#endif\n	worldPosition = modelMatrix * worldPosition;\n#endif",
          background_vert:
            "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	gl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
          background_frag:
            "uniform sampler2D t2D;\nuniform float backgroundIntensity;\nvarying vec2 vUv;\nvoid main() {\n	vec4 texColor = texture2D( t2D, vUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );\n	#endif\n	texColor.rgb *= backgroundIntensity;\n	gl_FragColor = texColor;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}",
          backgroundCube_vert:
            "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}",
          backgroundCube_frag:
            "#ifdef ENVMAP_TYPE_CUBE\n	uniform samplerCube envMap;\n#elif defined( ENVMAP_TYPE_CUBE_UV )\n	uniform sampler2D envMap;\n#endif\nuniform float flipEnvMap;\nuniform float backgroundBlurriness;\nuniform float backgroundIntensity;\nuniform mat3 backgroundRotation;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );\n	#elif defined( ENVMAP_TYPE_CUBE_UV )\n		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );\n	#else\n		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n	#endif\n	texColor.rgb *= backgroundIntensity;\n	gl_FragColor = texColor;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}",
          cube_vert:
            "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}",
          cube_frag:
            "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n	gl_FragColor = texColor;\n	gl_FragColor.a *= opacity;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}",
          depth_vert:
            "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <skinbase_vertex>\n	#include <morphinstance_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vHighPrecisionZW = gl_Position.zw;\n}",
          depth_frag:
            "#if DEPTH_PACKING == 3200\n	uniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <clipping_planes_fragment>\n	#if DEPTH_PACKING == 3200\n		diffuseColor.a = opacity;\n	#endif\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <logdepthbuf_fragment>\n	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n	#if DEPTH_PACKING == 3200\n		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n	#elif DEPTH_PACKING == 3201\n		gl_FragColor = packDepthToRGBA( fragCoordZ );\n	#elif DEPTH_PACKING == 3202\n		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );\n	#elif DEPTH_PACKING == 3203\n		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );\n	#endif\n}",
          distanceRGBA_vert:
            "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <skinbase_vertex>\n	#include <morphinstance_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	#include <clipping_planes_vertex>\n	vWorldPosition = worldPosition.xyz;\n}",
          distanceRGBA_frag:
            "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <clipping_planes_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	float dist = length( vWorldPosition - referencePosition );\n	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n	dist = saturate( dist );\n	gl_FragColor = packDepthToRGBA( dist );\n}",
          equirect_vert:
            "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n}",
          equirect_frag:
            "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vec3 direction = normalize( vWorldDirection );\n	vec2 sampleUV = equirectUv( direction );\n	gl_FragColor = texture2D( tEquirect, sampleUV );\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}",
          linedashed_vert:
            "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	vLineDistance = scale * lineDistance;\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}",
          linedashed_frag:
            "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	if ( mod( vLineDistance, totalSize ) > dashSize ) {\n		discard;\n	}\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}",
          meshbasic_vert:
            "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinbase_vertex>\n		#include <skinnormal_vertex>\n		#include <defaultnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <fog_vertex>\n}",
          meshbasic_frag:
            "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n	#else\n		reflectedLight.indirectDiffuse += vec3( 1.0 );\n	#endif\n	#include <aomap_fragment>\n	reflectedLight.indirectDiffuse *= diffuseColor.rgb;\n	vec3 outgoingLight = reflectedLight.indirectDiffuse;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
          meshlambert_vert:
            "#define LAMBERT\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
          meshlambert_frag:
            "#define LAMBERT\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_lambert_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_lambert_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
          meshmatcap_vert:
            "#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n	vViewPosition = - mvPosition.xyz;\n}",
          meshmatcap_frag:
            "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	vec3 viewDir = normalize( vViewPosition );\n	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n	vec3 y = cross( viewDir, x );\n	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n	#ifdef USE_MATCAP\n		vec4 matcapColor = texture2D( matcap, uv );\n	#else\n		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n	#endif\n	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
          meshnormal_vert:
            "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	varying vec3 vViewPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	vViewPosition = - mvPosition.xyz;\n#endif\n}",
          meshnormal_frag:
            "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	varying vec3 vViewPosition;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );\n	#ifdef OPAQUE\n		gl_FragColor.a = 1.0;\n	#endif\n}",
          meshphong_vert:
            "#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
          meshphong_frag:
            "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_phong_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
          meshphysical_vert:
            "#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n	varying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n	vWorldPosition = worldPosition.xyz;\n#endif\n}",
          meshphysical_frag:
            "#define STANDARD\n#ifdef PHYSICAL\n	#define IOR\n	#define USE_SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n	uniform float ior;\n#endif\n#ifdef USE_SPECULAR\n	uniform float specularIntensity;\n	uniform vec3 specularColor;\n	#ifdef USE_SPECULAR_COLORMAP\n		uniform sampler2D specularColorMap;\n	#endif\n	#ifdef USE_SPECULAR_INTENSITYMAP\n		uniform sampler2D specularIntensityMap;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT\n	uniform float clearcoat;\n	uniform float clearcoatRoughness;\n#endif\n#ifdef USE_DISPERSION\n	uniform float dispersion;\n#endif\n#ifdef USE_IRIDESCENCE\n	uniform float iridescence;\n	uniform float iridescenceIOR;\n	uniform float iridescenceThicknessMinimum;\n	uniform float iridescenceThicknessMaximum;\n#endif\n#ifdef USE_SHEEN\n	uniform vec3 sheenColor;\n	uniform float sheenRoughness;\n	#ifdef USE_SHEEN_COLORMAP\n		uniform sampler2D sheenColorMap;\n	#endif\n	#ifdef USE_SHEEN_ROUGHNESSMAP\n		uniform sampler2D sheenRoughnessMap;\n	#endif\n#endif\n#ifdef USE_ANISOTROPY\n	uniform vec2 anisotropyVector;\n	#ifdef USE_ANISOTROPYMAP\n		uniform sampler2D anisotropyMap;\n	#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <iridescence_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <iridescence_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <roughnessmap_fragment>\n	#include <metalnessmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <clearcoat_normal_fragment_begin>\n	#include <clearcoat_normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_physical_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n	#include <transmission_fragment>\n	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n	#ifdef USE_SHEEN\n		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );\n		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;\n	#endif\n	#ifdef USE_CLEARCOAT\n		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );\n		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;\n	#endif\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
          meshtoon_vert:
            "#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
          meshtoon_frag:
            "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_toon_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
          points_vert:
            "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n#ifdef USE_POINTS_UV\n	varying vec2 vUv;\n	uniform mat3 uvTransform;\n#endif\nvoid main() {\n	#ifdef USE_POINTS_UV\n		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	#endif\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	gl_PointSize = size;\n	#ifdef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n	#endif\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <fog_vertex>\n}",
          points_frag:
            "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_particle_fragment>\n	#include <color_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}",
          shadow_vert:
            "#include <common>\n#include <batching_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
          shadow_frag:
            "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <logdepthbuf_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n	#include <logdepthbuf_fragment>\n	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n}",
          sprite_vert:
            "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	vec4 mvPosition = modelViewMatrix[ 3 ];\n	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );\n	#ifndef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) scale *= - mvPosition.z;\n	#endif\n	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n	vec2 rotatedPosition;\n	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n	mvPosition.xy += rotatedPosition;\n	gl_Position = projectionMatrix * mvPosition;\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}",
          sprite_frag:
            "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n}",
        },
        l = {
          common: {
            diffuse: { value: new i.Q1f(0xffffff) },
            opacity: { value: 1 },
            map: { value: null },
            mapTransform: { value: new i.dwI() },
            alphaMap: { value: null },
            alphaMapTransform: { value: new i.dwI() },
            alphaTest: { value: 0 },
          },
          specularmap: {
            specularMap: { value: null },
            specularMapTransform: { value: new i.dwI() },
          },
          envmap: {
            envMap: { value: null },
            envMapRotation: { value: new i.dwI() },
            flipEnvMap: { value: -1 },
            reflectivity: { value: 1 },
            ior: { value: 1.5 },
            refractionRatio: { value: 0.98 },
          },
          aomap: {
            aoMap: { value: null },
            aoMapIntensity: { value: 1 },
            aoMapTransform: { value: new i.dwI() },
          },
          lightmap: {
            lightMap: { value: null },
            lightMapIntensity: { value: 1 },
            lightMapTransform: { value: new i.dwI() },
          },
          bumpmap: {
            bumpMap: { value: null },
            bumpMapTransform: { value: new i.dwI() },
            bumpScale: { value: 1 },
          },
          normalmap: {
            normalMap: { value: null },
            normalMapTransform: { value: new i.dwI() },
            normalScale: { value: new i.I9Y(1, 1) },
          },
          displacementmap: {
            displacementMap: { value: null },
            displacementMapTransform: { value: new i.dwI() },
            displacementScale: { value: 1 },
            displacementBias: { value: 0 },
          },
          emissivemap: {
            emissiveMap: { value: null },
            emissiveMapTransform: { value: new i.dwI() },
          },
          metalnessmap: {
            metalnessMap: { value: null },
            metalnessMapTransform: { value: new i.dwI() },
          },
          roughnessmap: {
            roughnessMap: { value: null },
            roughnessMapTransform: { value: new i.dwI() },
          },
          gradientmap: { gradientMap: { value: null } },
          fog: {
            fogDensity: { value: 25e-5 },
            fogNear: { value: 1 },
            fogFar: { value: 2e3 },
            fogColor: { value: new i.Q1f(0xffffff) },
          },
          lights: {
            ambientLightColor: { value: [] },
            lightProbe: { value: [] },
            directionalLights: {
              value: [],
              properties: { direction: {}, color: {} },
            },
            directionalLightShadows: {
              value: [],
              properties: {
                shadowIntensity: 1,
                shadowBias: {},
                shadowNormalBias: {},
                shadowRadius: {},
                shadowMapSize: {},
              },
            },
            directionalShadowMap: { value: [] },
            directionalShadowMatrix: { value: [] },
            spotLights: {
              value: [],
              properties: {
                color: {},
                position: {},
                direction: {},
                distance: {},
                coneCos: {},
                penumbraCos: {},
                decay: {},
              },
            },
            spotLightShadows: {
              value: [],
              properties: {
                shadowIntensity: 1,
                shadowBias: {},
                shadowNormalBias: {},
                shadowRadius: {},
                shadowMapSize: {},
              },
            },
            spotLightMap: { value: [] },
            spotShadowMap: { value: [] },
            spotLightMatrix: { value: [] },
            pointLights: {
              value: [],
              properties: { color: {}, position: {}, decay: {}, distance: {} },
            },
            pointLightShadows: {
              value: [],
              properties: {
                shadowIntensity: 1,
                shadowBias: {},
                shadowNormalBias: {},
                shadowRadius: {},
                shadowMapSize: {},
                shadowCameraNear: {},
                shadowCameraFar: {},
              },
            },
            pointShadowMap: { value: [] },
            pointShadowMatrix: { value: [] },
            hemisphereLights: {
              value: [],
              properties: { direction: {}, skyColor: {}, groundColor: {} },
            },
            rectAreaLights: {
              value: [],
              properties: { color: {}, position: {}, width: {}, height: {} },
            },
            ltc_1: { value: null },
            ltc_2: { value: null },
          },
          points: {
            diffuse: { value: new i.Q1f(0xffffff) },
            opacity: { value: 1 },
            size: { value: 1 },
            scale: { value: 1 },
            map: { value: null },
            alphaMap: { value: null },
            alphaMapTransform: { value: new i.dwI() },
            alphaTest: { value: 0 },
            uvTransform: { value: new i.dwI() },
          },
          sprite: {
            diffuse: { value: new i.Q1f(0xffffff) },
            opacity: { value: 1 },
            center: { value: new i.I9Y(0.5, 0.5) },
            rotation: { value: 0 },
            map: { value: null },
            mapTransform: { value: new i.dwI() },
            alphaMap: { value: null },
            alphaMapTransform: { value: new i.dwI() },
            alphaTest: { value: 0 },
          },
        },
        s = {
          basic: {
            uniforms: (0, i.Iit)([
              l.common,
              l.specularmap,
              l.envmap,
              l.aomap,
              l.lightmap,
              l.fog,
            ]),
            vertexShader: o.meshbasic_vert,
            fragmentShader: o.meshbasic_frag,
          },
          lambert: {
            uniforms: (0, i.Iit)([
              l.common,
              l.specularmap,
              l.envmap,
              l.aomap,
              l.lightmap,
              l.emissivemap,
              l.bumpmap,
              l.normalmap,
              l.displacementmap,
              l.fog,
              l.lights,
              { emissive: { value: new i.Q1f(0) } },
            ]),
            vertexShader: o.meshlambert_vert,
            fragmentShader: o.meshlambert_frag,
          },
          phong: {
            uniforms: (0, i.Iit)([
              l.common,
              l.specularmap,
              l.envmap,
              l.aomap,
              l.lightmap,
              l.emissivemap,
              l.bumpmap,
              l.normalmap,
              l.displacementmap,
              l.fog,
              l.lights,
              {
                emissive: { value: new i.Q1f(0) },
                specular: { value: new i.Q1f(1118481) },
                shininess: { value: 30 },
              },
            ]),
            vertexShader: o.meshphong_vert,
            fragmentShader: o.meshphong_frag,
          },
          standard: {
            uniforms: (0, i.Iit)([
              l.common,
              l.envmap,
              l.aomap,
              l.lightmap,
              l.emissivemap,
              l.bumpmap,
              l.normalmap,
              l.displacementmap,
              l.roughnessmap,
              l.metalnessmap,
              l.fog,
              l.lights,
              {
                emissive: { value: new i.Q1f(0) },
                roughness: { value: 1 },
                metalness: { value: 0 },
                envMapIntensity: { value: 1 },
              },
            ]),
            vertexShader: o.meshphysical_vert,
            fragmentShader: o.meshphysical_frag,
          },
          toon: {
            uniforms: (0, i.Iit)([
              l.common,
              l.aomap,
              l.lightmap,
              l.emissivemap,
              l.bumpmap,
              l.normalmap,
              l.displacementmap,
              l.gradientmap,
              l.fog,
              l.lights,
              { emissive: { value: new i.Q1f(0) } },
            ]),
            vertexShader: o.meshtoon_vert,
            fragmentShader: o.meshtoon_frag,
          },
          matcap: {
            uniforms: (0, i.Iit)([
              l.common,
              l.bumpmap,
              l.normalmap,
              l.displacementmap,
              l.fog,
              { matcap: { value: null } },
            ]),
            vertexShader: o.meshmatcap_vert,
            fragmentShader: o.meshmatcap_frag,
          },
          points: {
            uniforms: (0, i.Iit)([l.points, l.fog]),
            vertexShader: o.points_vert,
            fragmentShader: o.points_frag,
          },
          dashed: {
            uniforms: (0, i.Iit)([
              l.common,
              l.fog,
              {
                scale: { value: 1 },
                dashSize: { value: 1 },
                totalSize: { value: 2 },
              },
            ]),
            vertexShader: o.linedashed_vert,
            fragmentShader: o.linedashed_frag,
          },
          depth: {
            uniforms: (0, i.Iit)([l.common, l.displacementmap]),
            vertexShader: o.depth_vert,
            fragmentShader: o.depth_frag,
          },
          normal: {
            uniforms: (0, i.Iit)([
              l.common,
              l.bumpmap,
              l.normalmap,
              l.displacementmap,
              { opacity: { value: 1 } },
            ]),
            vertexShader: o.meshnormal_vert,
            fragmentShader: o.meshnormal_frag,
          },
          sprite: {
            uniforms: (0, i.Iit)([l.sprite, l.fog]),
            vertexShader: o.sprite_vert,
            fragmentShader: o.sprite_frag,
          },
          background: {
            uniforms: {
              uvTransform: { value: new i.dwI() },
              t2D: { value: null },
              backgroundIntensity: { value: 1 },
            },
            vertexShader: o.background_vert,
            fragmentShader: o.background_frag,
          },
          backgroundCube: {
            uniforms: {
              envMap: { value: null },
              flipEnvMap: { value: -1 },
              backgroundBlurriness: { value: 0 },
              backgroundIntensity: { value: 1 },
              backgroundRotation: { value: new i.dwI() },
            },
            vertexShader: o.backgroundCube_vert,
            fragmentShader: o.backgroundCube_frag,
          },
          cube: {
            uniforms: {
              tCube: { value: null },
              tFlip: { value: -1 },
              opacity: { value: 1 },
            },
            vertexShader: o.cube_vert,
            fragmentShader: o.cube_frag,
          },
          equirect: {
            uniforms: { tEquirect: { value: null } },
            vertexShader: o.equirect_vert,
            fragmentShader: o.equirect_frag,
          },
          distanceRGBA: {
            uniforms: (0, i.Iit)([
              l.common,
              l.displacementmap,
              {
                referencePosition: { value: new i.Pq0() },
                nearDistance: { value: 1 },
                farDistance: { value: 1e3 },
              },
            ]),
            vertexShader: o.distanceRGBA_vert,
            fragmentShader: o.distanceRGBA_frag,
          },
          shadow: {
            uniforms: (0, i.Iit)([
              l.lights,
              l.fog,
              { color: { value: new i.Q1f(0) }, opacity: { value: 1 } },
            ]),
            vertexShader: o.shadow_vert,
            fragmentShader: o.shadow_frag,
          },
        };
      s.physical = {
        uniforms: (0, i.Iit)([
          s.standard.uniforms,
          {
            clearcoat: { value: 0 },
            clearcoatMap: { value: null },
            clearcoatMapTransform: { value: new i.dwI() },
            clearcoatNormalMap: { value: null },
            clearcoatNormalMapTransform: { value: new i.dwI() },
            clearcoatNormalScale: { value: new i.I9Y(1, 1) },
            clearcoatRoughness: { value: 0 },
            clearcoatRoughnessMap: { value: null },
            clearcoatRoughnessMapTransform: { value: new i.dwI() },
            dispersion: { value: 0 },
            iridescence: { value: 0 },
            iridescenceMap: { value: null },
            iridescenceMapTransform: { value: new i.dwI() },
            iridescenceIOR: { value: 1.3 },
            iridescenceThicknessMinimum: { value: 100 },
            iridescenceThicknessMaximum: { value: 400 },
            iridescenceThicknessMap: { value: null },
            iridescenceThicknessMapTransform: { value: new i.dwI() },
            sheen: { value: 0 },
            sheenColor: { value: new i.Q1f(0) },
            sheenColorMap: { value: null },
            sheenColorMapTransform: { value: new i.dwI() },
            sheenRoughness: { value: 1 },
            sheenRoughnessMap: { value: null },
            sheenRoughnessMapTransform: { value: new i.dwI() },
            transmission: { value: 0 },
            transmissionMap: { value: null },
            transmissionMapTransform: { value: new i.dwI() },
            transmissionSamplerSize: { value: new i.I9Y() },
            transmissionSamplerMap: { value: null },
            thickness: { value: 0 },
            thicknessMap: { value: null },
            thicknessMapTransform: { value: new i.dwI() },
            attenuationDistance: { value: 0 },
            attenuationColor: { value: new i.Q1f(0) },
            specularColor: { value: new i.Q1f(1, 1, 1) },
            specularColorMap: { value: null },
            specularColorMapTransform: { value: new i.dwI() },
            specularIntensity: { value: 1 },
            specularIntensityMap: { value: null },
            specularIntensityMapTransform: { value: new i.dwI() },
            anisotropyVector: { value: new i.I9Y() },
            anisotropyMap: { value: null },
            anisotropyMapTransform: { value: new i.dwI() },
          },
        ]),
        vertexShader: o.meshphysical_vert,
        fragmentShader: o.meshphysical_frag,
      };
      let c = { r: 0, b: 0, g: 0 },
        d = new i.O9p(),
        u = new i.kn4();
      function f(e, n, t, r, a, o, l) {
        let f, p;
        let m = new i.Q1f(0),
          h = !0 === o ? 0 : 1,
          _ = null,
          g = 0,
          v = null;
        function E(e) {
          let i = !0 === e.isScene ? e.background : null;
          return (
            i &&
              i.isTexture &&
              (i = (e.backgroundBlurriness > 0 ? t : n).get(i)),
            i
          );
        }
        function S(n, t) {
          n.getRGB(c, (0, i._Ut)(e)),
            r.buffers.color.setClear(c.r, c.g, c.b, t, l);
        }
        return {
          getClearColor: function () {
            return m;
          },
          setClearColor: function (e, n = 1) {
            m.set(e), S(m, (h = n));
          },
          getClearAlpha: function () {
            return h;
          },
          setClearAlpha: function (e) {
            S(m, (h = e));
          },
          render: function (n) {
            let t = !1,
              i = E(n);
            null === i ? S(m, h) : i && i.isColor && (S(i, 1), (t = !0));
            let a = e.xr.getEnvironmentBlendMode();
            "additive" === a
              ? r.buffers.color.setClear(0, 0, 0, 1, l)
              : "alpha-blend" === a && r.buffers.color.setClear(0, 0, 0, 0, l),
              (e.autoClear || t) &&
                (r.buffers.depth.setTest(!0),
                r.buffers.depth.setMask(!0),
                r.buffers.color.setMask(!0),
                e.clear(
                  e.autoClearColor,
                  e.autoClearDepth,
                  e.autoClearStencil
                ));
          },
          addToRenderList: function (n, t) {
            let r = E(t);
            r && (r.isCubeTexture || r.mapping === i.Om)
              ? (void 0 === p &&
                  ((p = new i.eaF(
                    new i.iNn(1, 1, 1),
                    new i.BKk({
                      name: "BackgroundCubeMaterial",
                      uniforms: (0, i.lxW)(s.backgroundCube.uniforms),
                      vertexShader: s.backgroundCube.vertexShader,
                      fragmentShader: s.backgroundCube.fragmentShader,
                      side: i.hsX,
                      depthTest: !1,
                      depthWrite: !1,
                      fog: !1,
                    })
                  )).geometry.deleteAttribute("normal"),
                  p.geometry.deleteAttribute("uv"),
                  (p.onBeforeRender = function (e, n, t) {
                    this.matrixWorld.copyPosition(t.matrixWorld);
                  }),
                  Object.defineProperty(p.material, "envMap", {
                    get: function () {
                      return this.uniforms.envMap.value;
                    },
                  }),
                  a.update(p)),
                d.copy(t.backgroundRotation),
                (d.x *= -1),
                (d.y *= -1),
                (d.z *= -1),
                r.isCubeTexture &&
                  !1 === r.isRenderTargetTexture &&
                  ((d.y *= -1), (d.z *= -1)),
                (p.material.uniforms.envMap.value = r),
                (p.material.uniforms.flipEnvMap.value =
                  r.isCubeTexture && !1 === r.isRenderTargetTexture ? -1 : 1),
                (p.material.uniforms.backgroundBlurriness.value =
                  t.backgroundBlurriness),
                (p.material.uniforms.backgroundIntensity.value =
                  t.backgroundIntensity),
                p.material.uniforms.backgroundRotation.value.setFromMatrix4(
                  u.makeRotationFromEuler(d)
                ),
                (p.material.toneMapped =
                  i.ppV.getTransfer(r.colorSpace) !== i.KLL),
                (_ !== r || g !== r.version || v !== e.toneMapping) &&
                  ((p.material.needsUpdate = !0),
                  (_ = r),
                  (g = r.version),
                  (v = e.toneMapping)),
                p.layers.enableAll(),
                n.unshift(p, p.geometry, p.material, 0, 0, null))
              : r &&
                r.isTexture &&
                (void 0 === f &&
                  ((f = new i.eaF(
                    new i.bdM(2, 2),
                    new i.BKk({
                      name: "BackgroundMaterial",
                      uniforms: (0, i.lxW)(s.background.uniforms),
                      vertexShader: s.background.vertexShader,
                      fragmentShader: s.background.fragmentShader,
                      side: i.hB5,
                      depthTest: !1,
                      depthWrite: !1,
                      fog: !1,
                    })
                  )).geometry.deleteAttribute("normal"),
                  Object.defineProperty(f.material, "map", {
                    get: function () {
                      return this.uniforms.t2D.value;
                    },
                  }),
                  a.update(f)),
                (f.material.uniforms.t2D.value = r),
                (f.material.uniforms.backgroundIntensity.value =
                  t.backgroundIntensity),
                (f.material.toneMapped =
                  i.ppV.getTransfer(r.colorSpace) !== i.KLL),
                !0 === r.matrixAutoUpdate && r.updateMatrix(),
                f.material.uniforms.uvTransform.value.copy(r.matrix),
                (_ !== r || g !== r.version || v !== e.toneMapping) &&
                  ((f.material.needsUpdate = !0),
                  (_ = r),
                  (g = r.version),
                  (v = e.toneMapping)),
                f.layers.enableAll(),
                n.unshift(f, f.geometry, f.material, 0, 0, null));
          },
          dispose: function () {
            void 0 !== p && (p.geometry.dispose(), p.material.dispose()),
              void 0 !== f && (f.geometry.dispose(), f.material.dispose());
          },
        };
      }
      function p(e, n) {
        let t = e.getParameter(e.MAX_VERTEX_ATTRIBS),
          r = {},
          a = d(null),
          o = a,
          l = !1;
        function s(n) {
          return e.bindVertexArray(n);
        }
        function c(n) {
          return e.deleteVertexArray(n);
        }
        function d(e) {
          let n = [],
            i = [],
            r = [];
          for (let e = 0; e < t; e++) (n[e] = 0), (i[e] = 0), (r[e] = 0);
          return {
            geometry: null,
            program: null,
            wireframe: !1,
            newAttributes: n,
            enabledAttributes: i,
            attributeDivisors: r,
            object: e,
            attributes: {},
            index: null,
          };
        }
        function u() {
          let e = o.newAttributes;
          for (let n = 0, t = e.length; n < t; n++) e[n] = 0;
        }
        function f(e) {
          p(e, 0);
        }
        function p(n, t) {
          let i = o.newAttributes,
            r = o.enabledAttributes,
            a = o.attributeDivisors;
          (i[n] = 1),
            0 === r[n] && (e.enableVertexAttribArray(n), (r[n] = 1)),
            a[n] !== t && (e.vertexAttribDivisor(n, t), (a[n] = t));
        }
        function m() {
          let n = o.newAttributes,
            t = o.enabledAttributes;
          for (let i = 0, r = t.length; i < r; i++)
            t[i] !== n[i] && (e.disableVertexAttribArray(i), (t[i] = 0));
        }
        function h(n, t, i, r, a, o, l) {
          !0 === l
            ? e.vertexAttribIPointer(n, t, i, a, o)
            : e.vertexAttribPointer(n, t, i, r, a, o);
        }
        function _() {
          g(), (l = !0), o !== a && s((o = a).object);
        }
        function g() {
          (a.geometry = null), (a.program = null), (a.wireframe = !1);
        }
        return {
          setup: function (t, a, c, _, g) {
            let v = !1,
              E = (function (n, t, i) {
                let a = !0 === i.wireframe,
                  o = r[n.id];
                void 0 === o && ((o = {}), (r[n.id] = o));
                let l = o[t.id];
                void 0 === l && ((l = {}), (o[t.id] = l));
                let s = l[a];
                return (
                  void 0 === s && ((s = d(e.createVertexArray())), (l[a] = s)),
                  s
                );
              })(_, c, a);
            o !== E && s((o = E).object),
              (v = (function (e, n, t, i) {
                let r = o.attributes,
                  a = n.attributes,
                  l = 0,
                  s = t.getAttributes();
                for (let n in s)
                  if (s[n].location >= 0) {
                    let t = r[n],
                      i = a[n];
                    if (
                      (void 0 === i &&
                        ("instanceMatrix" === n &&
                          e.instanceMatrix &&
                          (i = e.instanceMatrix),
                        "instanceColor" === n &&
                          e.instanceColor &&
                          (i = e.instanceColor)),
                      void 0 === t ||
                        t.attribute !== i ||
                        (i && t.data !== i.data))
                    )
                      return !0;
                    l++;
                  }
                return o.attributesNum !== l || o.index !== i;
              })(t, _, c, g)) &&
                (function (e, n, t, i) {
                  let r = {},
                    a = n.attributes,
                    l = 0,
                    s = t.getAttributes();
                  for (let n in s)
                    if (s[n].location >= 0) {
                      let t = a[n];
                      void 0 === t &&
                        ("instanceMatrix" === n &&
                          e.instanceMatrix &&
                          (t = e.instanceMatrix),
                        "instanceColor" === n &&
                          e.instanceColor &&
                          (t = e.instanceColor));
                      let i = {};
                      (i.attribute = t),
                        t && t.data && (i.data = t.data),
                        (r[n] = i),
                        l++;
                    }
                  (o.attributes = r), (o.attributesNum = l), (o.index = i);
                })(t, _, c, g),
              null !== g && n.update(g, e.ELEMENT_ARRAY_BUFFER),
              (v || l) &&
                ((l = !1),
                (function (t, r, a, o) {
                  u();
                  let l = o.attributes,
                    s = a.getAttributes(),
                    c = r.defaultAttributeValues;
                  for (let r in s) {
                    let a = s[r];
                    if (a.location >= 0) {
                      let s = l[r];
                      if (
                        (void 0 === s &&
                          ("instanceMatrix" === r &&
                            t.instanceMatrix &&
                            (s = t.instanceMatrix),
                          "instanceColor" === r &&
                            t.instanceColor &&
                            (s = t.instanceColor)),
                        void 0 !== s)
                      ) {
                        let r = s.normalized,
                          l = s.itemSize,
                          c = n.get(s);
                        if (void 0 === c) continue;
                        let d = c.buffer,
                          u = c.type,
                          m = c.bytesPerElement,
                          _ =
                            u === e.INT ||
                            u === e.UNSIGNED_INT ||
                            s.gpuType === i.Yuy;
                        if (s.isInterleavedBufferAttribute) {
                          let n = s.data,
                            i = n.stride,
                            c = s.offset;
                          if (n.isInstancedInterleavedBuffer) {
                            for (let e = 0; e < a.locationSize; e++)
                              p(a.location + e, n.meshPerAttribute);
                            !0 !== t.isInstancedMesh &&
                              void 0 === o._maxInstanceCount &&
                              (o._maxInstanceCount =
                                n.meshPerAttribute * n.count);
                          } else
                            for (let e = 0; e < a.locationSize; e++)
                              f(a.location + e);
                          e.bindBuffer(e.ARRAY_BUFFER, d);
                          for (let e = 0; e < a.locationSize; e++)
                            h(
                              a.location + e,
                              l / a.locationSize,
                              u,
                              r,
                              i * m,
                              (c + (l / a.locationSize) * e) * m,
                              _
                            );
                        } else {
                          if (s.isInstancedBufferAttribute) {
                            for (let e = 0; e < a.locationSize; e++)
                              p(a.location + e, s.meshPerAttribute);
                            !0 !== t.isInstancedMesh &&
                              void 0 === o._maxInstanceCount &&
                              (o._maxInstanceCount =
                                s.meshPerAttribute * s.count);
                          } else
                            for (let e = 0; e < a.locationSize; e++)
                              f(a.location + e);
                          e.bindBuffer(e.ARRAY_BUFFER, d);
                          for (let e = 0; e < a.locationSize; e++)
                            h(
                              a.location + e,
                              l / a.locationSize,
                              u,
                              r,
                              l * m,
                              (l / a.locationSize) * e * m,
                              _
                            );
                        }
                      } else if (void 0 !== c) {
                        let n = c[r];
                        if (void 0 !== n)
                          switch (n.length) {
                            case 2:
                              e.vertexAttrib2fv(a.location, n);
                              break;
                            case 3:
                              e.vertexAttrib3fv(a.location, n);
                              break;
                            case 4:
                              e.vertexAttrib4fv(a.location, n);
                              break;
                            default:
                              e.vertexAttrib1fv(a.location, n);
                          }
                      }
                    }
                  }
                  m();
                })(t, a, c, _),
                null !== g &&
                  e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, n.get(g).buffer));
          },
          reset: _,
          resetDefaultState: g,
          dispose: function () {
            for (let e in (_(), r)) {
              let n = r[e];
              for (let e in n) {
                let t = n[e];
                for (let e in t) c(t[e].object), delete t[e];
                delete n[e];
              }
              delete r[e];
            }
          },
          releaseStatesOfGeometry: function (e) {
            if (void 0 === r[e.id]) return;
            let n = r[e.id];
            for (let e in n) {
              let t = n[e];
              for (let e in t) c(t[e].object), delete t[e];
              delete n[e];
            }
            delete r[e.id];
          },
          releaseStatesOfProgram: function (e) {
            for (let n in r) {
              let t = r[n];
              if (void 0 === t[e.id]) continue;
              let i = t[e.id];
              for (let e in i) c(i[e].object), delete i[e];
              delete t[e.id];
            }
          },
          initAttributes: u,
          enableAttribute: f,
          disableUnusedAttributes: m,
        };
      }
      function m(e, n, t) {
        let i;
        function r(n, r, a) {
          0 !== a && (e.drawArraysInstanced(i, n, r, a), t.update(r, i, a));
        }
        (this.setMode = function (e) {
          i = e;
        }),
          (this.render = function (n, r) {
            e.drawArrays(i, n, r), t.update(r, i, 1);
          }),
          (this.renderInstances = r),
          (this.renderMultiDraw = function (e, r, a) {
            if (0 === a) return;
            n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i, e, 0, r, 0, a);
            let o = 0;
            for (let e = 0; e < a; e++) o += r[e];
            t.update(o, i, 1);
          }),
          (this.renderMultiDrawInstances = function (e, a, o, l) {
            if (0 === o) return;
            let s = n.get("WEBGL_multi_draw");
            if (null === s)
              for (let n = 0; n < e.length; n++) r(e[n], a[n], l[n]);
            else {
              s.multiDrawArraysInstancedWEBGL(i, e, 0, a, 0, l, 0, o);
              let n = 0;
              for (let e = 0; e < o; e++) n += a[e] * l[e];
              t.update(n, i, 1);
            }
          });
      }
      function h(e, n, t, r) {
        let a;
        function o(n) {
          if ("highp" === n) {
            if (
              e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT)
                .precision > 0 &&
              e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT)
                .precision > 0
            )
              return "highp";
            n = "mediump";
          }
          return "mediump" === n &&
            e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT)
              .precision > 0 &&
            e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT)
              .precision > 0
            ? "mediump"
            : "lowp";
        }
        let l = void 0 !== t.precision ? t.precision : "highp",
          s = o(l);
        s !== l &&
          (console.warn(
            "THREE.WebGLRenderer:",
            l,
            "not supported, using",
            s,
            "instead."
          ),
          (l = s));
        let c = !0 === t.logarithmicDepthBuffer,
          d = !0 === t.reverseDepthBuffer && n.has("EXT_clip_control"),
          u = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),
          f = e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
          p = e.getParameter(e.MAX_TEXTURE_SIZE),
          m = e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),
          h = e.getParameter(e.MAX_VERTEX_ATTRIBS),
          _ = e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS);
        return {
          isWebGL2: !0,
          getMaxAnisotropy: function () {
            if (void 0 !== a) return a;
            if (!0 === n.has("EXT_texture_filter_anisotropic")) {
              let t = n.get("EXT_texture_filter_anisotropic");
              a = e.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
            } else a = 0;
            return a;
          },
          getMaxPrecision: o,
          textureFormatReadable: function (n) {
            return (
              n === i.GWd ||
              r.convert(n) ===
                e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)
            );
          },
          textureTypeReadable: function (t) {
            let a =
              t === i.ix0 &&
              (n.has("EXT_color_buffer_half_float") ||
                n.has("EXT_color_buffer_float"));
            return (
              t === i.OUM ||
              r.convert(t) ===
                e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE) ||
              t === i.RQf ||
              !!a
            );
          },
          precision: l,
          logarithmicDepthBuffer: c,
          reverseDepthBuffer: d,
          maxTextures: u,
          maxVertexTextures: f,
          maxTextureSize: p,
          maxCubemapSize: m,
          maxAttributes: h,
          maxVertexUniforms: _,
          maxVaryings: e.getParameter(e.MAX_VARYING_VECTORS),
          maxFragmentUniforms: e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),
          vertexTextures: f > 0,
          maxSamples: e.getParameter(e.MAX_SAMPLES),
        };
      }
      function _(e) {
        let n = this,
          t = null,
          r = 0,
          a = !1,
          o = !1,
          l = new i.Zcv(),
          s = new i.dwI(),
          c = { value: null, needsUpdate: !1 };
        function d(e, t, i, r) {
          let a = null !== e ? e.length : 0,
            o = null;
          if (0 !== a) {
            if (((o = c.value), !0 !== r || null === o)) {
              let n = i + 4 * a,
                r = t.matrixWorldInverse;
              s.getNormalMatrix(r),
                (null === o || o.length < n) && (o = new Float32Array(n));
              for (let n = 0, t = i; n !== a; ++n, t += 4)
                l.copy(e[n]).applyMatrix4(r, s),
                  l.normal.toArray(o, t),
                  (o[t + 3] = l.constant);
            }
            (c.value = o), (c.needsUpdate = !0);
          }
          return (n.numPlanes = a), (n.numIntersection = 0), o;
        }
        (this.uniform = c),
          (this.numPlanes = 0),
          (this.numIntersection = 0),
          (this.init = function (e, n) {
            let t = 0 !== e.length || n || 0 !== r || a;
            return (a = n), (r = e.length), t;
          }),
          (this.beginShadows = function () {
            (o = !0), d(null);
          }),
          (this.endShadows = function () {
            o = !1;
          }),
          (this.setGlobalState = function (e, n) {
            t = d(e, n, 0);
          }),
          (this.setState = function (i, l, s) {
            let u = i.clippingPlanes,
              f = i.clipIntersection,
              p = i.clipShadows,
              m = e.get(i);
            if (a && null !== u && 0 !== u.length && (!o || p)) {
              let e = o ? 0 : r,
                n = 4 * e,
                i = m.clippingState || null;
              (c.value = i), (i = d(u, l, n, s));
              for (let e = 0; e !== n; ++e) i[e] = t[e];
              (m.clippingState = i),
                (this.numIntersection = f ? this.numPlanes : 0),
                (this.numPlanes += e);
            } else
              o
                ? d(null)
                : (c.value !== t && ((c.value = t), (c.needsUpdate = r > 0)),
                  (n.numPlanes = r),
                  (n.numIntersection = 0));
          });
      }
      function g(e) {
        let n = new WeakMap();
        function t(e, n) {
          return (
            n === i.wfO
              ? (e.mapping = i.hy7)
              : n === i.uV5 && (e.mapping = i.xFO),
            e
          );
        }
        function r(e) {
          let t = e.target;
          t.removeEventListener("dispose", r);
          let i = n.get(t);
          void 0 !== i && (n.delete(t), i.dispose());
        }
        return {
          get: function (a) {
            if (a && a.isTexture) {
              let o = a.mapping;
              if (o === i.wfO || o === i.uV5) {
                if (n.has(a)) return t(n.get(a).texture, a.mapping);
                {
                  let o = a.image;
                  if (!o || !(o.height > 0)) return null;
                  {
                    let l = new i.o6l(o.height);
                    return (
                      l.fromEquirectangularTexture(e, a),
                      n.set(a, l),
                      a.addEventListener("dispose", r),
                      t(l.texture, a.mapping)
                    );
                  }
                }
              }
            }
            return a;
          },
          dispose: function () {
            n = new WeakMap();
          },
        };
      }
      let v = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
        E = new i.qUd(),
        S = new i.Q1f(),
        T = null,
        M = 0,
        x = 0,
        R = !1,
        A = (1 + Math.sqrt(5)) / 2,
        b = 1 / A,
        C = [
          new i.Pq0(-A, b, 0),
          new i.Pq0(A, b, 0),
          new i.Pq0(-b, 0, A),
          new i.Pq0(b, 0, A),
          new i.Pq0(0, A, -b),
          new i.Pq0(0, A, b),
          new i.Pq0(-1, 1, -1),
          new i.Pq0(1, 1, -1),
          new i.Pq0(-1, 1, 1),
          new i.Pq0(1, 1, 1),
        ];
      class L {
        constructor(e) {
          (this._renderer = e),
            (this._pingPongRenderTarget = null),
            (this._lodMax = 0),
            (this._cubeSize = 0),
            (this._lodPlanes = []),
            (this._sizeLods = []),
            (this._sigmas = []),
            (this._blurMaterial = null),
            (this._cubemapMaterial = null),
            (this._equirectMaterial = null),
            this._compileMaterial(this._blurMaterial);
        }
        fromScene(e, n = 0, t = 0.1, i = 100) {
          (T = this._renderer.getRenderTarget()),
            (M = this._renderer.getActiveCubeFace()),
            (x = this._renderer.getActiveMipmapLevel()),
            (R = this._renderer.xr.enabled),
            (this._renderer.xr.enabled = !1),
            this._setSize(256);
          let r = this._allocateTargets();
          return (
            (r.depthBuffer = !0),
            this._sceneToCubeUV(e, t, i, r),
            n > 0 && this._blur(r, 0, 0, n),
            this._applyPMREM(r),
            this._cleanup(r),
            r
          );
        }
        fromEquirectangular(e, n = null) {
          return this._fromTexture(e, n);
        }
        fromCubemap(e, n = null) {
          return this._fromTexture(e, n);
        }
        compileCubemapShader() {
          null === this._cubemapMaterial &&
            ((this._cubemapMaterial = D()),
            this._compileMaterial(this._cubemapMaterial));
        }
        compileEquirectangularShader() {
          null === this._equirectMaterial &&
            ((this._equirectMaterial = w()),
            this._compileMaterial(this._equirectMaterial));
        }
        dispose() {
          this._dispose(),
            null !== this._cubemapMaterial && this._cubemapMaterial.dispose(),
            null !== this._equirectMaterial && this._equirectMaterial.dispose();
        }
        _setSize(e) {
          (this._lodMax = Math.floor(Math.log2(e))),
            (this._cubeSize = Math.pow(2, this._lodMax));
        }
        _dispose() {
          null !== this._blurMaterial && this._blurMaterial.dispose(),
            null !== this._pingPongRenderTarget &&
              this._pingPongRenderTarget.dispose();
          for (let e = 0; e < this._lodPlanes.length; e++)
            this._lodPlanes[e].dispose();
        }
        _cleanup(e) {
          this._renderer.setRenderTarget(T, M, x),
            (this._renderer.xr.enabled = R),
            (e.scissorTest = !1),
            U(e, 0, 0, e.width, e.height);
        }
        _fromTexture(e, n) {
          e.mapping === i.hy7 || e.mapping === i.xFO
            ? this._setSize(
                0 === e.image.length
                  ? 16
                  : e.image[0].width || e.image[0].image.width
              )
            : this._setSize(e.image.width / 4),
            (T = this._renderer.getRenderTarget()),
            (M = this._renderer.getActiveCubeFace()),
            (x = this._renderer.getActiveMipmapLevel()),
            (R = this._renderer.xr.enabled),
            (this._renderer.xr.enabled = !1);
          let t = n || this._allocateTargets();
          return (
            this._textureToCubeUV(e, t),
            this._applyPMREM(t),
            this._cleanup(t),
            t
          );
        }
        _allocateTargets() {
          let e = 3 * Math.max(this._cubeSize, 112),
            n = 4 * this._cubeSize,
            t = {
              magFilter: i.k6q,
              minFilter: i.k6q,
              generateMipmaps: !1,
              type: i.ix0,
              format: i.GWd,
              colorSpace: i.Zr2,
              depthBuffer: !1,
            },
            r = P(e, n, t);
          if (
            null === this._pingPongRenderTarget ||
            this._pingPongRenderTarget.width !== e ||
            this._pingPongRenderTarget.height !== n
          ) {
            null !== this._pingPongRenderTarget && this._dispose(),
              (this._pingPongRenderTarget = P(e, n, t));
            let { _lodMax: r } = this;
            ({
              sizeLods: this._sizeLods,
              lodPlanes: this._lodPlanes,
              sigmas: this._sigmas,
            } = (function (e) {
              let n = [],
                t = [],
                r = [],
                a = e,
                o = e - 4 + 1 + v.length;
              for (let l = 0; l < o; l++) {
                let o = Math.pow(2, a);
                t.push(o);
                let s = 1 / o;
                l > e - 4 ? (s = v[l - e + 4 - 1]) : 0 === l && (s = 0),
                  r.push(s);
                let c = 1 / (o - 2),
                  d = -c,
                  u = 1 + c,
                  f = [d, d, u, d, u, u, d, d, u, u, d, u],
                  p = new Float32Array(108),
                  m = new Float32Array(72),
                  h = new Float32Array(36);
                for (let e = 0; e < 6; e++) {
                  let n = ((e % 3) * 2) / 3 - 1,
                    t = e > 2 ? 0 : -1,
                    i = [
                      n,
                      t,
                      0,
                      n + 2 / 3,
                      t,
                      0,
                      n + 2 / 3,
                      t + 1,
                      0,
                      n,
                      t,
                      0,
                      n + 2 / 3,
                      t + 1,
                      0,
                      n,
                      t + 1,
                      0,
                    ];
                  p.set(i, 18 * e), m.set(f, 12 * e);
                  let r = [e, e, e, e, e, e];
                  h.set(r, 6 * e);
                }
                let _ = new i.LoY();
                _.setAttribute("position", new i.THS(p, 3)),
                  _.setAttribute("uv", new i.THS(m, 2)),
                  _.setAttribute("faceIndex", new i.THS(h, 1)),
                  n.push(_),
                  a > 4 && a--;
              }
              return { lodPlanes: n, sizeLods: t, sigmas: r };
            })(r)),
              (this._blurMaterial = (function (e, n, t) {
                let r = new Float32Array(20),
                  a = new i.Pq0(0, 1, 0);
                return new i.BKk({
                  name: "SphericalGaussianBlur",
                  defines: {
                    n: 20,
                    CUBEUV_TEXEL_WIDTH: 1 / n,
                    CUBEUV_TEXEL_HEIGHT: 1 / t,
                    CUBEUV_MAX_MIP: `${e}.0`,
                  },
                  uniforms: {
                    envMap: { value: null },
                    samples: { value: 1 },
                    weights: { value: r },
                    latitudinal: { value: !1 },
                    dTheta: { value: 0 },
                    mipInt: { value: 0 },
                    poleAxis: { value: a },
                  },
                  vertexShader: y(),
                  fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
                  blending: i.XIg,
                  depthTest: !1,
                  depthWrite: !1,
                });
              })(r, e, n));
          }
          return r;
        }
        _compileMaterial(e) {
          let n = new i.eaF(this._lodPlanes[0], e);
          this._renderer.compile(n, E);
        }
        _sceneToCubeUV(e, n, t, r) {
          let a = new i.ubm(90, 1, n, t),
            o = [1, -1, 1, 1, 1, 1],
            l = [1, 1, 1, -1, -1, -1],
            s = this._renderer,
            c = s.autoClear,
            d = s.toneMapping;
          s.getClearColor(S), (s.toneMapping = i.y_p), (s.autoClear = !1);
          let u = new i.V9B({
              name: "PMREM.Background",
              side: i.hsX,
              depthWrite: !1,
              depthTest: !1,
            }),
            f = new i.eaF(new i.iNn(), u),
            p = !1,
            m = e.background;
          m
            ? m.isColor && (u.color.copy(m), (e.background = null), (p = !0))
            : (u.color.copy(S), (p = !0));
          for (let n = 0; n < 6; n++) {
            let t = n % 3;
            0 === t
              ? (a.up.set(0, o[n], 0), a.lookAt(l[n], 0, 0))
              : 1 === t
              ? (a.up.set(0, 0, o[n]), a.lookAt(0, l[n], 0))
              : (a.up.set(0, o[n], 0), a.lookAt(0, 0, l[n]));
            let i = this._cubeSize;
            U(r, t * i, n > 2 ? i : 0, i, i),
              s.setRenderTarget(r),
              p && s.render(f, a),
              s.render(e, a);
          }
          f.geometry.dispose(),
            f.material.dispose(),
            (s.toneMapping = d),
            (s.autoClear = c),
            (e.background = m);
        }
        _textureToCubeUV(e, n) {
          let t = this._renderer,
            r = e.mapping === i.hy7 || e.mapping === i.xFO;
          r
            ? (null === this._cubemapMaterial && (this._cubemapMaterial = D()),
              (this._cubemapMaterial.uniforms.flipEnvMap.value =
                !1 === e.isRenderTargetTexture ? -1 : 1))
            : null === this._equirectMaterial && (this._equirectMaterial = w());
          let a = r ? this._cubemapMaterial : this._equirectMaterial,
            o = new i.eaF(this._lodPlanes[0], a);
          a.uniforms.envMap.value = e;
          let l = this._cubeSize;
          U(n, 0, 0, 3 * l, 2 * l), t.setRenderTarget(n), t.render(o, E);
        }
        _applyPMREM(e) {
          let n = this._renderer,
            t = n.autoClear;
          n.autoClear = !1;
          let i = this._lodPlanes.length;
          for (let n = 1; n < i; n++) {
            let t = Math.sqrt(
                this._sigmas[n] * this._sigmas[n] -
                  this._sigmas[n - 1] * this._sigmas[n - 1]
              ),
              r = C[(i - n - 1) % C.length];
            this._blur(e, n - 1, n, t, r);
          }
          n.autoClear = t;
        }
        _blur(e, n, t, i, r) {
          let a = this._pingPongRenderTarget;
          this._halfBlur(e, a, n, t, i, "latitudinal", r),
            this._halfBlur(a, e, t, t, i, "longitudinal", r);
        }
        _halfBlur(e, n, t, r, a, o, l) {
          let s = this._renderer,
            c = this._blurMaterial;
          "latitudinal" !== o &&
            "longitudinal" !== o &&
            console.error(
              "blur direction must be either latitudinal or longitudinal!"
            );
          let d = new i.eaF(this._lodPlanes[r], c),
            u = c.uniforms,
            f = this._sizeLods[t] - 1,
            p = isFinite(a) ? Math.PI / (2 * f) : (2 * Math.PI) / 39,
            m = a / p,
            h = isFinite(a) ? 1 + Math.floor(3 * m) : 20;
          h > 20 &&
            console.warn(
              `sigmaRadians, ${a}, is too large and will clip, as it requested ${h} samples when the maximum is set to 20`
            );
          let _ = [],
            g = 0;
          for (let e = 0; e < 20; ++e) {
            let n = e / m,
              t = Math.exp((-n * n) / 2);
            _.push(t), 0 === e ? (g += t) : e < h && (g += 2 * t);
          }
          for (let e = 0; e < _.length; e++) _[e] = _[e] / g;
          (u.envMap.value = e.texture),
            (u.samples.value = h),
            (u.weights.value = _),
            (u.latitudinal.value = "latitudinal" === o),
            l && (u.poleAxis.value = l);
          let { _lodMax: v } = this;
          (u.dTheta.value = p), (u.mipInt.value = v - t);
          let S = this._sizeLods[r],
            T = 4 * (this._cubeSize - S);
          U(n, 3 * S * (r > v - 4 ? r - v + 4 : 0), T, 3 * S, 2 * S),
            s.setRenderTarget(n),
            s.render(d, E);
        }
      }
      function P(e, n, t) {
        let r = new i.nWS(e, n, t);
        return (
          (r.texture.mapping = i.Om),
          (r.texture.name = "PMREM.cubeUv"),
          (r.scissorTest = !0),
          r
        );
      }
      function U(e, n, t, i, r) {
        e.viewport.set(n, t, i, r), e.scissor.set(n, t, i, r);
      }
      function w() {
        return new i.BKk({
          name: "EquirectangularToCubeUV",
          uniforms: { envMap: { value: null } },
          vertexShader: y(),
          fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
          blending: i.XIg,
          depthTest: !1,
          depthWrite: !1,
        });
      }
      function D() {
        return new i.BKk({
          name: "CubemapToCubeUV",
          uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } },
          vertexShader: y(),
          fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
          blending: i.XIg,
          depthTest: !1,
          depthWrite: !1,
        });
      }
      function y() {
        return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
      }
      function I(e) {
        let n = new WeakMap(),
          t = null;
        function r(e) {
          let t = e.target;
          t.removeEventListener("dispose", r);
          let i = n.get(t);
          void 0 !== i && (n.delete(t), i.dispose());
        }
        return {
          get: function (a) {
            if (a && a.isTexture) {
              let o = a.mapping,
                l = o === i.wfO || o === i.uV5,
                s = o === i.hy7 || o === i.xFO;
              if (l || s) {
                let i = n.get(a),
                  o = void 0 !== i ? i.texture.pmremVersion : 0;
                if (a.isRenderTargetTexture && a.pmremVersion !== o)
                  return (
                    null === t && (t = new L(e)),
                    ((i = l
                      ? t.fromEquirectangular(a, i)
                      : t.fromCubemap(a, i)).texture.pmremVersion =
                      a.pmremVersion),
                    n.set(a, i),
                    i.texture
                  );
                if (void 0 !== i) return i.texture;
                {
                  let o = a.image;
                  return (l && o && o.height > 0) ||
                    (s &&
                      o &&
                      (function (e) {
                        let n = 0;
                        for (let t = 0; t < 6; t++) void 0 !== e[t] && n++;
                        return 6 === n;
                      })(o))
                    ? (null === t && (t = new L(e)),
                      ((i = l
                        ? t.fromEquirectangular(a)
                        : t.fromCubemap(a)).texture.pmremVersion =
                        a.pmremVersion),
                      n.set(a, i),
                      a.addEventListener("dispose", r),
                      i.texture)
                    : null;
                }
              }
            }
            return a;
          },
          dispose: function () {
            (n = new WeakMap()), null !== t && (t.dispose(), (t = null));
          },
        };
      }
      function N(e) {
        let n = {};
        function t(t) {
          let i;
          if (void 0 !== n[t]) return n[t];
          switch (t) {
            case "WEBGL_depth_texture":
              i =
                e.getExtension("WEBGL_depth_texture") ||
                e.getExtension("MOZ_WEBGL_depth_texture") ||
                e.getExtension("WEBKIT_WEBGL_depth_texture");
              break;
            case "EXT_texture_filter_anisotropic":
              i =
                e.getExtension("EXT_texture_filter_anisotropic") ||
                e.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
                e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
              break;
            case "WEBGL_compressed_texture_s3tc":
              i =
                e.getExtension("WEBGL_compressed_texture_s3tc") ||
                e.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
                e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
              break;
            case "WEBGL_compressed_texture_pvrtc":
              i =
                e.getExtension("WEBGL_compressed_texture_pvrtc") ||
                e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
              break;
            default:
              i = e.getExtension(t);
          }
          return (n[t] = i), i;
        }
        return {
          has: function (e) {
            return null !== t(e);
          },
          init: function () {
            t("EXT_color_buffer_float"),
              t("WEBGL_clip_cull_distance"),
              t("OES_texture_float_linear"),
              t("EXT_color_buffer_half_float"),
              t("WEBGL_multisampled_render_to_texture"),
              t("WEBGL_render_shared_exponent");
          },
          get: function (e) {
            let n = t(e);
            return (
              null === n &&
                (0, i.mcG)(
                  "THREE.WebGLRenderer: " + e + " extension not supported."
                ),
              n
            );
          },
        };
      }
      function O(e, n, t, r) {
        let a = {},
          o = new WeakMap();
        function l(e) {
          let i = e.target;
          for (let e in (null !== i.index && n.remove(i.index), i.attributes))
            n.remove(i.attributes[e]);
          i.removeEventListener("dispose", l), delete a[i.id];
          let s = o.get(i);
          s && (n.remove(s), o.delete(i)),
            r.releaseStatesOfGeometry(i),
            !0 === i.isInstancedBufferGeometry && delete i._maxInstanceCount,
            t.memory.geometries--;
        }
        function s(e) {
          let t = [],
            r = e.index,
            a = e.attributes.position,
            l = 0;
          if (null !== r) {
            let e = r.array;
            l = r.version;
            for (let n = 0, i = e.length; n < i; n += 3) {
              let i = e[n + 0],
                r = e[n + 1],
                a = e[n + 2];
              t.push(i, r, r, a, a, i);
            }
          } else {
            if (void 0 === a) return;
            let e = a.array;
            l = a.version;
            for (let n = 0, i = e.length / 3 - 1; n < i; n += 3) {
              let e = n + 0,
                i = n + 1,
                r = n + 2;
              t.push(e, i, i, r, r, e);
            }
          }
          let s = new ((0, i.AQS)(t) ? i.MW4 : i.A$4)(t, 1);
          s.version = l;
          let c = o.get(e);
          c && n.remove(c), o.set(e, s);
        }
        return {
          get: function (e, n) {
            return (
              !0 === a[n.id] ||
                (n.addEventListener("dispose", l),
                (a[n.id] = !0),
                t.memory.geometries++),
              n
            );
          },
          update: function (t) {
            let i = t.attributes;
            for (let t in i) n.update(i[t], e.ARRAY_BUFFER);
          },
          getWireframeAttribute: function (e) {
            let n = o.get(e);
            if (n) {
              let t = e.index;
              null !== t && n.version < t.version && s(e);
            } else s(e);
            return o.get(e);
          },
        };
      }
      function F(e, n, t) {
        let i, r, a;
        function o(n, o, l) {
          0 !== l &&
            (e.drawElementsInstanced(i, o, r, n * a, l), t.update(o, i, l));
        }
        (this.setMode = function (e) {
          i = e;
        }),
          (this.setIndex = function (e) {
            (r = e.type), (a = e.bytesPerElement);
          }),
          (this.render = function (n, o) {
            e.drawElements(i, o, r, n * a), t.update(o, i, 1);
          }),
          (this.renderInstances = o),
          (this.renderMultiDraw = function (e, a, o) {
            if (0 === o) return;
            n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(
              i,
              a,
              0,
              r,
              e,
              0,
              o
            );
            let l = 0;
            for (let e = 0; e < o; e++) l += a[e];
            t.update(l, i, 1);
          }),
          (this.renderMultiDrawInstances = function (e, l, s, c) {
            if (0 === s) return;
            let d = n.get("WEBGL_multi_draw");
            if (null === d)
              for (let n = 0; n < e.length; n++) o(e[n] / a, l[n], c[n]);
            else {
              d.multiDrawElementsInstancedWEBGL(i, l, 0, r, e, 0, c, 0, s);
              let n = 0;
              for (let e = 0; e < s; e++) n += l[e] * c[e];
              t.update(n, i, 1);
            }
          });
      }
      function B(e) {
        let n = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
        return {
          memory: { geometries: 0, textures: 0 },
          render: n,
          programs: null,
          autoReset: !0,
          reset: function () {
            (n.calls = 0), (n.triangles = 0), (n.points = 0), (n.lines = 0);
          },
          update: function (t, i, r) {
            switch ((n.calls++, i)) {
              case e.TRIANGLES:
                n.triangles += (t / 3) * r;
                break;
              case e.LINES:
                n.lines += (t / 2) * r;
                break;
              case e.LINE_STRIP:
                n.lines += r * (t - 1);
                break;
              case e.LINE_LOOP:
                n.lines += r * t;
                break;
              case e.POINTS:
                n.points += r * t;
                break;
              default:
                console.error("THREE.WebGLInfo: Unknown draw mode:", i);
            }
          },
        };
      }
      function H(e, n, t) {
        let r = new WeakMap(),
          a = new i.IUQ();
        return {
          update: function (o, l, s) {
            let c = o.morphTargetInfluences,
              d =
                l.morphAttributes.position ||
                l.morphAttributes.normal ||
                l.morphAttributes.color,
              u = void 0 !== d ? d.length : 0,
              f = r.get(l);
            if (void 0 === f || f.count !== u) {
              void 0 !== f && f.texture.dispose();
              let e = void 0 !== l.morphAttributes.position,
                t = void 0 !== l.morphAttributes.normal,
                o = void 0 !== l.morphAttributes.color,
                s = l.morphAttributes.position || [],
                c = l.morphAttributes.normal || [],
                d = l.morphAttributes.color || [],
                p = 0;
              !0 === e && (p = 1), !0 === t && (p = 2), !0 === o && (p = 3);
              let m = l.attributes.position.count * p,
                h = 1;
              m > n.maxTextureSize &&
                ((h = Math.ceil(m / n.maxTextureSize)), (m = n.maxTextureSize));
              let _ = new Float32Array(m * h * 4 * u),
                g = new i.rFo(_, m, h, u);
              (g.type = i.RQf), (g.needsUpdate = !0);
              let v = 4 * p;
              for (let n = 0; n < u; n++) {
                let i = s[n],
                  r = c[n],
                  l = d[n],
                  u = m * h * 4 * n;
                for (let n = 0; n < i.count; n++) {
                  let s = n * v;
                  !0 === e &&
                    (a.fromBufferAttribute(i, n),
                    (_[u + s + 0] = a.x),
                    (_[u + s + 1] = a.y),
                    (_[u + s + 2] = a.z),
                    (_[u + s + 3] = 0)),
                    !0 === t &&
                      (a.fromBufferAttribute(r, n),
                      (_[u + s + 4] = a.x),
                      (_[u + s + 5] = a.y),
                      (_[u + s + 6] = a.z),
                      (_[u + s + 7] = 0)),
                    !0 === o &&
                      (a.fromBufferAttribute(l, n),
                      (_[u + s + 8] = a.x),
                      (_[u + s + 9] = a.y),
                      (_[u + s + 10] = a.z),
                      (_[u + s + 11] = 4 === l.itemSize ? a.w : 1));
                }
              }
              (f = { count: u, texture: g, size: new i.I9Y(m, h) }),
                r.set(l, f),
                l.addEventListener("dispose", function e() {
                  g.dispose(), r.delete(l), l.removeEventListener("dispose", e);
                });
            }
            if (!0 === o.isInstancedMesh && null !== o.morphTexture)
              s.getUniforms().setValue(e, "morphTexture", o.morphTexture, t);
            else {
              let n = 0;
              for (let e = 0; e < c.length; e++) n += c[e];
              let t = l.morphTargetsRelative ? 1 : 1 - n;
              s.getUniforms().setValue(e, "morphTargetBaseInfluence", t),
                s.getUniforms().setValue(e, "morphTargetInfluences", c);
            }
            s.getUniforms().setValue(e, "morphTargetsTexture", f.texture, t),
              s.getUniforms().setValue(e, "morphTargetsTextureSize", f.size);
          },
        };
      }
      function G(e, n, t, i) {
        let r = new WeakMap();
        function a(e) {
          let n = e.target;
          n.removeEventListener("dispose", a),
            t.remove(n.instanceMatrix),
            null !== n.instanceColor && t.remove(n.instanceColor);
        }
        return {
          update: function (o) {
            let l = i.render.frame,
              s = o.geometry,
              c = n.get(o, s);
            if (
              (r.get(c) !== l && (n.update(c), r.set(c, l)),
              o.isInstancedMesh &&
                (!1 === o.hasEventListener("dispose", a) &&
                  o.addEventListener("dispose", a),
                r.get(o) !== l &&
                  (t.update(o.instanceMatrix, e.ARRAY_BUFFER),
                  null !== o.instanceColor &&
                    t.update(o.instanceColor, e.ARRAY_BUFFER),
                  r.set(o, l))),
              o.isSkinnedMesh)
            ) {
              let e = o.skeleton;
              r.get(e) !== l && (e.update(), r.set(e, l));
            }
            return c;
          },
          dispose: function () {
            r = new WeakMap();
          },
        };
      }
      let V = new i.gPd(),
        k = new i.VCu(1, 1),
        z = new i.rFo(),
        W = new i.dYF(),
        X = new i.b4q(),
        Y = [],
        K = [],
        q = new Float32Array(16),
        j = new Float32Array(9),
        Q = new Float32Array(4);
      function Z(e, n, t) {
        let i = e[0];
        if (i <= 0 || i > 0) return e;
        let r = n * t,
          a = Y[r];
        if (
          (void 0 === a && ((a = new Float32Array(r)), (Y[r] = a)), 0 !== n)
        ) {
          i.toArray(a, 0);
          for (let i = 1, r = 0; i !== n; ++i) (r += t), e[i].toArray(a, r);
        }
        return a;
      }
      function $(e, n) {
        if (e.length !== n.length) return !1;
        for (let t = 0, i = e.length; t < i; t++) if (e[t] !== n[t]) return !1;
        return !0;
      }
      function J(e, n) {
        for (let t = 0, i = n.length; t < i; t++) e[t] = n[t];
      }
      function ee(e, n) {
        let t = K[n];
        void 0 === t && ((t = new Int32Array(n)), (K[n] = t));
        for (let i = 0; i !== n; ++i) t[i] = e.allocateTextureUnit();
        return t;
      }
      function en(e, n) {
        let t = this.cache;
        t[0] !== n && (e.uniform1f(this.addr, n), (t[0] = n));
      }
      function et(e, n) {
        let t = this.cache;
        if (void 0 !== n.x)
          (t[0] !== n.x || t[1] !== n.y) &&
            (e.uniform2f(this.addr, n.x, n.y), (t[0] = n.x), (t[1] = n.y));
        else {
          if ($(t, n)) return;
          e.uniform2fv(this.addr, n), J(t, n);
        }
      }
      function ei(e, n) {
        let t = this.cache;
        if (void 0 !== n.x)
          (t[0] !== n.x || t[1] !== n.y || t[2] !== n.z) &&
            (e.uniform3f(this.addr, n.x, n.y, n.z),
            (t[0] = n.x),
            (t[1] = n.y),
            (t[2] = n.z));
        else if (void 0 !== n.r)
          (t[0] !== n.r || t[1] !== n.g || t[2] !== n.b) &&
            (e.uniform3f(this.addr, n.r, n.g, n.b),
            (t[0] = n.r),
            (t[1] = n.g),
            (t[2] = n.b));
        else {
          if ($(t, n)) return;
          e.uniform3fv(this.addr, n), J(t, n);
        }
      }
      function er(e, n) {
        let t = this.cache;
        if (void 0 !== n.x)
          (t[0] !== n.x || t[1] !== n.y || t[2] !== n.z || t[3] !== n.w) &&
            (e.uniform4f(this.addr, n.x, n.y, n.z, n.w),
            (t[0] = n.x),
            (t[1] = n.y),
            (t[2] = n.z),
            (t[3] = n.w));
        else {
          if ($(t, n)) return;
          e.uniform4fv(this.addr, n), J(t, n);
        }
      }
      function ea(e, n) {
        let t = this.cache,
          i = n.elements;
        if (void 0 === i) {
          if ($(t, n)) return;
          e.uniformMatrix2fv(this.addr, !1, n), J(t, n);
        } else {
          if ($(t, i)) return;
          Q.set(i), e.uniformMatrix2fv(this.addr, !1, Q), J(t, i);
        }
      }
      function eo(e, n) {
        let t = this.cache,
          i = n.elements;
        if (void 0 === i) {
          if ($(t, n)) return;
          e.uniformMatrix3fv(this.addr, !1, n), J(t, n);
        } else {
          if ($(t, i)) return;
          j.set(i), e.uniformMatrix3fv(this.addr, !1, j), J(t, i);
        }
      }
      function el(e, n) {
        let t = this.cache,
          i = n.elements;
        if (void 0 === i) {
          if ($(t, n)) return;
          e.uniformMatrix4fv(this.addr, !1, n), J(t, n);
        } else {
          if ($(t, i)) return;
          q.set(i), e.uniformMatrix4fv(this.addr, !1, q), J(t, i);
        }
      }
      function es(e, n) {
        let t = this.cache;
        t[0] !== n && (e.uniform1i(this.addr, n), (t[0] = n));
      }
      function ec(e, n) {
        let t = this.cache;
        if (void 0 !== n.x)
          (t[0] !== n.x || t[1] !== n.y) &&
            (e.uniform2i(this.addr, n.x, n.y), (t[0] = n.x), (t[1] = n.y));
        else {
          if ($(t, n)) return;
          e.uniform2iv(this.addr, n), J(t, n);
        }
      }
      function ed(e, n) {
        let t = this.cache;
        if (void 0 !== n.x)
          (t[0] !== n.x || t[1] !== n.y || t[2] !== n.z) &&
            (e.uniform3i(this.addr, n.x, n.y, n.z),
            (t[0] = n.x),
            (t[1] = n.y),
            (t[2] = n.z));
        else {
          if ($(t, n)) return;
          e.uniform3iv(this.addr, n), J(t, n);
        }
      }
      function eu(e, n) {
        let t = this.cache;
        if (void 0 !== n.x)
          (t[0] !== n.x || t[1] !== n.y || t[2] !== n.z || t[3] !== n.w) &&
            (e.uniform4i(this.addr, n.x, n.y, n.z, n.w),
            (t[0] = n.x),
            (t[1] = n.y),
            (t[2] = n.z),
            (t[3] = n.w));
        else {
          if ($(t, n)) return;
          e.uniform4iv(this.addr, n), J(t, n);
        }
      }
      function ef(e, n) {
        let t = this.cache;
        t[0] !== n && (e.uniform1ui(this.addr, n), (t[0] = n));
      }
      function ep(e, n) {
        let t = this.cache;
        if (void 0 !== n.x)
          (t[0] !== n.x || t[1] !== n.y) &&
            (e.uniform2ui(this.addr, n.x, n.y), (t[0] = n.x), (t[1] = n.y));
        else {
          if ($(t, n)) return;
          e.uniform2uiv(this.addr, n), J(t, n);
        }
      }
      function em(e, n) {
        let t = this.cache;
        if (void 0 !== n.x)
          (t[0] !== n.x || t[1] !== n.y || t[2] !== n.z) &&
            (e.uniform3ui(this.addr, n.x, n.y, n.z),
            (t[0] = n.x),
            (t[1] = n.y),
            (t[2] = n.z));
        else {
          if ($(t, n)) return;
          e.uniform3uiv(this.addr, n), J(t, n);
        }
      }
      function eh(e, n) {
        let t = this.cache;
        if (void 0 !== n.x)
          (t[0] !== n.x || t[1] !== n.y || t[2] !== n.z || t[3] !== n.w) &&
            (e.uniform4ui(this.addr, n.x, n.y, n.z, n.w),
            (t[0] = n.x),
            (t[1] = n.y),
            (t[2] = n.z),
            (t[3] = n.w));
        else {
          if ($(t, n)) return;
          e.uniform4uiv(this.addr, n), J(t, n);
        }
      }
      function e_(e, n, t) {
        let r;
        let a = this.cache,
          o = t.allocateTextureUnit();
        a[0] !== o && (e.uniform1i(this.addr, o), (a[0] = o)),
          this.type === e.SAMPLER_2D_SHADOW
            ? ((k.compareFunction = i.TiK), (r = k))
            : (r = V),
          t.setTexture2D(n || r, o);
      }
      function eg(e, n, t) {
        let i = this.cache,
          r = t.allocateTextureUnit();
        i[0] !== r && (e.uniform1i(this.addr, r), (i[0] = r)),
          t.setTexture3D(n || W, r);
      }
      function ev(e, n, t) {
        let i = this.cache,
          r = t.allocateTextureUnit();
        i[0] !== r && (e.uniform1i(this.addr, r), (i[0] = r)),
          t.setTextureCube(n || X, r);
      }
      function eE(e, n, t) {
        let i = this.cache,
          r = t.allocateTextureUnit();
        i[0] !== r && (e.uniform1i(this.addr, r), (i[0] = r)),
          t.setTexture2DArray(n || z, r);
      }
      function eS(e, n) {
        e.uniform1fv(this.addr, n);
      }
      function eT(e, n) {
        let t = Z(n, this.size, 2);
        e.uniform2fv(this.addr, t);
      }
      function eM(e, n) {
        let t = Z(n, this.size, 3);
        e.uniform3fv(this.addr, t);
      }
      function ex(e, n) {
        let t = Z(n, this.size, 4);
        e.uniform4fv(this.addr, t);
      }
      function eR(e, n) {
        let t = Z(n, this.size, 4);
        e.uniformMatrix2fv(this.addr, !1, t);
      }
      function eA(e, n) {
        let t = Z(n, this.size, 9);
        e.uniformMatrix3fv(this.addr, !1, t);
      }
      function eb(e, n) {
        let t = Z(n, this.size, 16);
        e.uniformMatrix4fv(this.addr, !1, t);
      }
      function eC(e, n) {
        e.uniform1iv(this.addr, n);
      }
      function eL(e, n) {
        e.uniform2iv(this.addr, n);
      }
      function eP(e, n) {
        e.uniform3iv(this.addr, n);
      }
      function eU(e, n) {
        e.uniform4iv(this.addr, n);
      }
      function ew(e, n) {
        e.uniform1uiv(this.addr, n);
      }
      function eD(e, n) {
        e.uniform2uiv(this.addr, n);
      }
      function ey(e, n) {
        e.uniform3uiv(this.addr, n);
      }
      function eI(e, n) {
        e.uniform4uiv(this.addr, n);
      }
      function eN(e, n, t) {
        let i = this.cache,
          r = n.length,
          a = ee(t, r);
        $(i, a) || (e.uniform1iv(this.addr, a), J(i, a));
        for (let e = 0; e !== r; ++e) t.setTexture2D(n[e] || V, a[e]);
      }
      function eO(e, n, t) {
        let i = this.cache,
          r = n.length,
          a = ee(t, r);
        $(i, a) || (e.uniform1iv(this.addr, a), J(i, a));
        for (let e = 0; e !== r; ++e) t.setTexture3D(n[e] || W, a[e]);
      }
      function eF(e, n, t) {
        let i = this.cache,
          r = n.length,
          a = ee(t, r);
        $(i, a) || (e.uniform1iv(this.addr, a), J(i, a));
        for (let e = 0; e !== r; ++e) t.setTextureCube(n[e] || X, a[e]);
      }
      function eB(e, n, t) {
        let i = this.cache,
          r = n.length,
          a = ee(t, r);
        $(i, a) || (e.uniform1iv(this.addr, a), J(i, a));
        for (let e = 0; e !== r; ++e) t.setTexture2DArray(n[e] || z, a[e]);
      }
      class eH {
        constructor(e, n, t) {
          (this.id = e),
            (this.addr = t),
            (this.cache = []),
            (this.type = n.type),
            (this.setValue = (function (e) {
              switch (e) {
                case 5126:
                  return en;
                case 35664:
                  return et;
                case 35665:
                  return ei;
                case 35666:
                  return er;
                case 35674:
                  return ea;
                case 35675:
                  return eo;
                case 35676:
                  return el;
                case 5124:
                case 35670:
                  return es;
                case 35667:
                case 35671:
                  return ec;
                case 35668:
                case 35672:
                  return ed;
                case 35669:
                case 35673:
                  return eu;
                case 5125:
                  return ef;
                case 36294:
                  return ep;
                case 36295:
                  return em;
                case 36296:
                  return eh;
                case 35678:
                case 36198:
                case 36298:
                case 36306:
                case 35682:
                  return e_;
                case 35679:
                case 36299:
                case 36307:
                  return eg;
                case 35680:
                case 36300:
                case 36308:
                case 36293:
                  return ev;
                case 36289:
                case 36303:
                case 36311:
                case 36292:
                  return eE;
              }
            })(n.type));
        }
      }
      class eG {
        constructor(e, n, t) {
          (this.id = e),
            (this.addr = t),
            (this.cache = []),
            (this.type = n.type),
            (this.size = n.size),
            (this.setValue = (function (e) {
              switch (e) {
                case 5126:
                  return eS;
                case 35664:
                  return eT;
                case 35665:
                  return eM;
                case 35666:
                  return ex;
                case 35674:
                  return eR;
                case 35675:
                  return eA;
                case 35676:
                  return eb;
                case 5124:
                case 35670:
                  return eC;
                case 35667:
                case 35671:
                  return eL;
                case 35668:
                case 35672:
                  return eP;
                case 35669:
                case 35673:
                  return eU;
                case 5125:
                  return ew;
                case 36294:
                  return eD;
                case 36295:
                  return ey;
                case 36296:
                  return eI;
                case 35678:
                case 36198:
                case 36298:
                case 36306:
                case 35682:
                  return eN;
                case 35679:
                case 36299:
                case 36307:
                  return eO;
                case 35680:
                case 36300:
                case 36308:
                case 36293:
                  return eF;
                case 36289:
                case 36303:
                case 36311:
                case 36292:
                  return eB;
              }
            })(n.type));
        }
      }
      class eV {
        constructor(e) {
          (this.id = e), (this.seq = []), (this.map = {});
        }
        setValue(e, n, t) {
          let i = this.seq;
          for (let r = 0, a = i.length; r !== a; ++r) {
            let a = i[r];
            a.setValue(e, n[a.id], t);
          }
        }
      }
      let ek = /(\w+)(\])?(\[|\.)?/g;
      function ez(e, n) {
        e.seq.push(n), (e.map[n.id] = n);
      }
      class eW {
        constructor(e, n) {
          (this.seq = []), (this.map = {});
          let t = e.getProgramParameter(n, e.ACTIVE_UNIFORMS);
          for (let i = 0; i < t; ++i) {
            let t = e.getActiveUniform(n, i),
              r = e.getUniformLocation(n, t.name);
            !(function (e, n, t) {
              let i = e.name,
                r = i.length;
              for (ek.lastIndex = 0; ; ) {
                let a = ek.exec(i),
                  o = ek.lastIndex,
                  l = a[1],
                  s = "]" === a[2],
                  c = a[3];
                if (
                  (s && (l |= 0), void 0 === c || ("[" === c && o + 2 === r))
                ) {
                  ez(t, void 0 === c ? new eH(l, e, n) : new eG(l, e, n));
                  break;
                }
                {
                  let e = t.map[l];
                  void 0 === e && ez(t, (e = new eV(l))), (t = e);
                }
              }
            })(t, r, this);
          }
        }
        setValue(e, n, t, i) {
          let r = this.map[n];
          void 0 !== r && r.setValue(e, t, i);
        }
        setOptional(e, n, t) {
          let i = n[t];
          void 0 !== i && this.setValue(e, t, i);
        }
        static upload(e, n, t, i) {
          for (let r = 0, a = n.length; r !== a; ++r) {
            let a = n[r],
              o = t[a.id];
            !1 !== o.needsUpdate && a.setValue(e, o.value, i);
          }
        }
        static seqWithValue(e, n) {
          let t = [];
          for (let i = 0, r = e.length; i !== r; ++i) {
            let r = e[i];
            r.id in n && t.push(r);
          }
          return t;
        }
      }
      function eX(e, n, t) {
        let i = e.createShader(n);
        return e.shaderSource(i, t), e.compileShader(i), i;
      }
      let eY = 0,
        eK = new i.dwI();
      function eq(e, n, t) {
        let i = e.getShaderParameter(n, e.COMPILE_STATUS),
          r = e.getShaderInfoLog(n).trim();
        if (i && "" === r) return "";
        let a = /ERROR: 0:(\d+)/.exec(r);
        if (!a) return r;
        {
          let i = parseInt(a[1]);
          return (
            t.toUpperCase() +
            "\n\n" +
            r +
            "\n\n" +
            (function (e, n) {
              let t = e.split("\n"),
                i = [],
                r = Math.max(n - 6, 0),
                a = Math.min(n + 6, t.length);
              for (let e = r; e < a; e++) {
                let r = e + 1;
                i.push(`${r === n ? ">" : " "} ${r}: ${t[e]}`);
              }
              return i.join("\n");
            })(e.getShaderSource(n), i)
          );
        }
      }
      let ej = new i.Pq0();
      function eQ(e) {
        return "" !== e;
      }
      function eZ(e, n) {
        let t =
          n.numSpotLightShadows +
          n.numSpotLightMaps -
          n.numSpotLightShadowsWithMaps;
        return e
          .replace(/NUM_DIR_LIGHTS/g, n.numDirLights)
          .replace(/NUM_SPOT_LIGHTS/g, n.numSpotLights)
          .replace(/NUM_SPOT_LIGHT_MAPS/g, n.numSpotLightMaps)
          .replace(/NUM_SPOT_LIGHT_COORDS/g, t)
          .replace(/NUM_RECT_AREA_LIGHTS/g, n.numRectAreaLights)
          .replace(/NUM_POINT_LIGHTS/g, n.numPointLights)
          .replace(/NUM_HEMI_LIGHTS/g, n.numHemiLights)
          .replace(/NUM_DIR_LIGHT_SHADOWS/g, n.numDirLightShadows)
          .replace(
            /NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,
            n.numSpotLightShadowsWithMaps
          )
          .replace(/NUM_SPOT_LIGHT_SHADOWS/g, n.numSpotLightShadows)
          .replace(/NUM_POINT_LIGHT_SHADOWS/g, n.numPointLightShadows);
      }
      function e$(e, n) {
        return e
          .replace(/NUM_CLIPPING_PLANES/g, n.numClippingPlanes)
          .replace(
            /UNION_CLIPPING_PLANES/g,
            n.numClippingPlanes - n.numClipIntersection
          );
      }
      let eJ = /^[ \t]*#include +<([\w\d./]+)>/gm;
      function e0(e) {
        return e.replace(eJ, e3);
      }
      let e1 = new Map();
      function e3(e, n) {
        let t = o[n];
        if (void 0 === t) {
          let e = e1.get(n);
          if (void 0 !== e)
            (t = o[e]),
              console.warn(
                'THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',
                n,
                e
              );
          else throw Error("Can not resolve #include <" + n + ">");
        }
        return e0(t);
      }
      let e2 =
        /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
      function e4(e) {
        return e.replace(e2, e5);
      }
      function e5(e, n, t, i) {
        let r = "";
        for (let e = parseInt(n); e < parseInt(t); e++)
          r += i
            .replace(/\[\s*i\s*\]/g, "[ " + e + " ]")
            .replace(/UNROLLED_LOOP_INDEX/g, e);
        return r;
      }
      function e6(e) {
        let n = `precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;
        return (
          "highp" === e.precision
            ? (n += "\n#define HIGH_PRECISION")
            : "mediump" === e.precision
            ? (n += "\n#define MEDIUM_PRECISION")
            : "lowp" === e.precision && (n += "\n#define LOW_PRECISION"),
          n
        );
      }
      function e9(e, n, t, r) {
        let a, l, s, c, d, u;
        let f = e.getContext(),
          p = t.defines,
          m = t.vertexShader,
          h = t.fragmentShader,
          _ =
            ((d = "SHADOWMAP_TYPE_BASIC"),
            t.shadowMapType === i.QP0
              ? (d = "SHADOWMAP_TYPE_PCF")
              : t.shadowMapType === i.Wk7
              ? (d = "SHADOWMAP_TYPE_PCF_SOFT")
              : t.shadowMapType === i.RyA && (d = "SHADOWMAP_TYPE_VSM"),
            d),
          g = (function (e) {
            let n = "ENVMAP_TYPE_CUBE";
            if (e.envMap)
              switch (e.envMapMode) {
                case i.hy7:
                case i.xFO:
                  n = "ENVMAP_TYPE_CUBE";
                  break;
                case i.Om:
                  n = "ENVMAP_TYPE_CUBE_UV";
              }
            return n;
          })(t),
          v =
            ((u = "ENVMAP_MODE_REFLECTION"),
            t.envMap &&
              t.envMapMode === i.xFO &&
              (u = "ENVMAP_MODE_REFRACTION"),
            u),
          E = (function (e) {
            let n = "ENVMAP_BLENDING_NONE";
            if (e.envMap)
              switch (e.combine) {
                case i.caT:
                  n = "ENVMAP_BLENDING_MULTIPLY";
                  break;
                case i.KRh:
                  n = "ENVMAP_BLENDING_MIX";
                  break;
                case i.XrR:
                  n = "ENVMAP_BLENDING_ADD";
              }
            return n;
          })(t),
          S = (function (e) {
            let n = e.envMapCubeUVHeight;
            if (null === n) return null;
            let t = Math.log2(n) - 2;
            return {
              texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 112)),
              texelHeight: 1 / n,
              maxMip: t,
            };
          })(t),
          T = [
            t.extensionClipCullDistance
              ? "#extension GL_ANGLE_clip_cull_distance : require"
              : "",
            t.extensionMultiDraw
              ? "#extension GL_ANGLE_multi_draw : require"
              : "",
          ]
            .filter(eQ)
            .join("\n"),
          M = (function (e) {
            let n = [];
            for (let t in e) {
              let i = e[t];
              !1 !== i && n.push("#define " + t + " " + i);
            }
            return n.join("\n");
          })(p),
          x = f.createProgram(),
          R = t.glslVersion ? "#version " + t.glslVersion + "\n" : "";
        t.isRawShaderMaterial
          ? ((a = [
              "#define SHADER_TYPE " + t.shaderType,
              "#define SHADER_NAME " + t.shaderName,
              M,
            ]
              .filter(eQ)
              .join("\n")).length > 0 && (a += "\n"),
            (l = [
              "#define SHADER_TYPE " + t.shaderType,
              "#define SHADER_NAME " + t.shaderName,
              M,
            ]
              .filter(eQ)
              .join("\n")).length > 0 && (l += "\n"))
          : ((a = [
              e6(t),
              "#define SHADER_TYPE " + t.shaderType,
              "#define SHADER_NAME " + t.shaderName,
              M,
              t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
              t.batching ? "#define USE_BATCHING" : "",
              t.batchingColor ? "#define USE_BATCHING_COLOR" : "",
              t.instancing ? "#define USE_INSTANCING" : "",
              t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
              t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
              t.useFog && t.fog ? "#define USE_FOG" : "",
              t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
              t.map ? "#define USE_MAP" : "",
              t.envMap ? "#define USE_ENVMAP" : "",
              t.envMap ? "#define " + v : "",
              t.lightMap ? "#define USE_LIGHTMAP" : "",
              t.aoMap ? "#define USE_AOMAP" : "",
              t.bumpMap ? "#define USE_BUMPMAP" : "",
              t.normalMap ? "#define USE_NORMALMAP" : "",
              t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
              t.normalMapTangentSpace
                ? "#define USE_NORMALMAP_TANGENTSPACE"
                : "",
              t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
              t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
              t.anisotropy ? "#define USE_ANISOTROPY" : "",
              t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
              t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
              t.clearcoatRoughnessMap
                ? "#define USE_CLEARCOAT_ROUGHNESSMAP"
                : "",
              t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
              t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
              t.iridescenceThicknessMap
                ? "#define USE_IRIDESCENCE_THICKNESSMAP"
                : "",
              t.specularMap ? "#define USE_SPECULARMAP" : "",
              t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
              t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
              t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
              t.metalnessMap ? "#define USE_METALNESSMAP" : "",
              t.alphaMap ? "#define USE_ALPHAMAP" : "",
              t.alphaHash ? "#define USE_ALPHAHASH" : "",
              t.transmission ? "#define USE_TRANSMISSION" : "",
              t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
              t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
              t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
              t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
              t.mapUv ? "#define MAP_UV " + t.mapUv : "",
              t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "",
              t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "",
              t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "",
              t.emissiveMapUv
                ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv
                : "",
              t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "",
              t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "",
              t.displacementMapUv
                ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv
                : "",
              t.metalnessMapUv
                ? "#define METALNESSMAP_UV " + t.metalnessMapUv
                : "",
              t.roughnessMapUv
                ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv
                : "",
              t.anisotropyMapUv
                ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv
                : "",
              t.clearcoatMapUv
                ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv
                : "",
              t.clearcoatNormalMapUv
                ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv
                : "",
              t.clearcoatRoughnessMapUv
                ? "#define CLEARCOAT_ROUGHNESSMAP_UV " +
                  t.clearcoatRoughnessMapUv
                : "",
              t.iridescenceMapUv
                ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv
                : "",
              t.iridescenceThicknessMapUv
                ? "#define IRIDESCENCE_THICKNESSMAP_UV " +
                  t.iridescenceThicknessMapUv
                : "",
              t.sheenColorMapUv
                ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv
                : "",
              t.sheenRoughnessMapUv
                ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv
                : "",
              t.specularMapUv
                ? "#define SPECULARMAP_UV " + t.specularMapUv
                : "",
              t.specularColorMapUv
                ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv
                : "",
              t.specularIntensityMapUv
                ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv
                : "",
              t.transmissionMapUv
                ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv
                : "",
              t.thicknessMapUv
                ? "#define THICKNESSMAP_UV " + t.thicknessMapUv
                : "",
              t.vertexTangents && !1 === t.flatShading
                ? "#define USE_TANGENT"
                : "",
              t.vertexColors ? "#define USE_COLOR" : "",
              t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
              t.vertexUv1s ? "#define USE_UV1" : "",
              t.vertexUv2s ? "#define USE_UV2" : "",
              t.vertexUv3s ? "#define USE_UV3" : "",
              t.pointsUvs ? "#define USE_POINTS_UV" : "",
              t.flatShading ? "#define FLAT_SHADED" : "",
              t.skinning ? "#define USE_SKINNING" : "",
              t.morphTargets ? "#define USE_MORPHTARGETS" : "",
              t.morphNormals && !1 === t.flatShading
                ? "#define USE_MORPHNORMALS"
                : "",
              t.morphColors ? "#define USE_MORPHCOLORS" : "",
              t.morphTargetsCount > 0
                ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride
                : "",
              t.morphTargetsCount > 0
                ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount
                : "",
              t.doubleSided ? "#define DOUBLE_SIDED" : "",
              t.flipSided ? "#define FLIP_SIDED" : "",
              t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
              t.shadowMapEnabled ? "#define " + _ : "",
              t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
              t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
              t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
              t.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "",
              "uniform mat4 modelMatrix;",
              "uniform mat4 modelViewMatrix;",
              "uniform mat4 projectionMatrix;",
              "uniform mat4 viewMatrix;",
              "uniform mat3 normalMatrix;",
              "uniform vec3 cameraPosition;",
              "uniform bool isOrthographic;",
              "#ifdef USE_INSTANCING",
              "	attribute mat4 instanceMatrix;",
              "#endif",
              "#ifdef USE_INSTANCING_COLOR",
              "	attribute vec3 instanceColor;",
              "#endif",
              "#ifdef USE_INSTANCING_MORPH",
              "	uniform sampler2D morphTexture;",
              "#endif",
              "attribute vec3 position;",
              "attribute vec3 normal;",
              "attribute vec2 uv;",
              "#ifdef USE_UV1",
              "	attribute vec2 uv1;",
              "#endif",
              "#ifdef USE_UV2",
              "	attribute vec2 uv2;",
              "#endif",
              "#ifdef USE_UV3",
              "	attribute vec2 uv3;",
              "#endif",
              "#ifdef USE_TANGENT",
              "	attribute vec4 tangent;",
              "#endif",
              "#if defined( USE_COLOR_ALPHA )",
              "	attribute vec4 color;",
              "#elif defined( USE_COLOR )",
              "	attribute vec3 color;",
              "#endif",
              "#ifdef USE_SKINNING",
              "	attribute vec4 skinIndex;",
              "	attribute vec4 skinWeight;",
              "#endif",
              "\n",
            ]
              .filter(eQ)
              .join("\n")),
            (l = [
              e6(t),
              "#define SHADER_TYPE " + t.shaderType,
              "#define SHADER_NAME " + t.shaderName,
              M,
              t.useFog && t.fog ? "#define USE_FOG" : "",
              t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
              t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
              t.map ? "#define USE_MAP" : "",
              t.matcap ? "#define USE_MATCAP" : "",
              t.envMap ? "#define USE_ENVMAP" : "",
              t.envMap ? "#define " + g : "",
              t.envMap ? "#define " + v : "",
              t.envMap ? "#define " + E : "",
              S ? "#define CUBEUV_TEXEL_WIDTH " + S.texelWidth : "",
              S ? "#define CUBEUV_TEXEL_HEIGHT " + S.texelHeight : "",
              S ? "#define CUBEUV_MAX_MIP " + S.maxMip + ".0" : "",
              t.lightMap ? "#define USE_LIGHTMAP" : "",
              t.aoMap ? "#define USE_AOMAP" : "",
              t.bumpMap ? "#define USE_BUMPMAP" : "",
              t.normalMap ? "#define USE_NORMALMAP" : "",
              t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
              t.normalMapTangentSpace
                ? "#define USE_NORMALMAP_TANGENTSPACE"
                : "",
              t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
              t.anisotropy ? "#define USE_ANISOTROPY" : "",
              t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
              t.clearcoat ? "#define USE_CLEARCOAT" : "",
              t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
              t.clearcoatRoughnessMap
                ? "#define USE_CLEARCOAT_ROUGHNESSMAP"
                : "",
              t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
              t.dispersion ? "#define USE_DISPERSION" : "",
              t.iridescence ? "#define USE_IRIDESCENCE" : "",
              t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
              t.iridescenceThicknessMap
                ? "#define USE_IRIDESCENCE_THICKNESSMAP"
                : "",
              t.specularMap ? "#define USE_SPECULARMAP" : "",
              t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
              t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
              t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
              t.metalnessMap ? "#define USE_METALNESSMAP" : "",
              t.alphaMap ? "#define USE_ALPHAMAP" : "",
              t.alphaTest ? "#define USE_ALPHATEST" : "",
              t.alphaHash ? "#define USE_ALPHAHASH" : "",
              t.sheen ? "#define USE_SHEEN" : "",
              t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
              t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
              t.transmission ? "#define USE_TRANSMISSION" : "",
              t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
              t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
              t.vertexTangents && !1 === t.flatShading
                ? "#define USE_TANGENT"
                : "",
              t.vertexColors || t.instancingColor || t.batchingColor
                ? "#define USE_COLOR"
                : "",
              t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
              t.vertexUv1s ? "#define USE_UV1" : "",
              t.vertexUv2s ? "#define USE_UV2" : "",
              t.vertexUv3s ? "#define USE_UV3" : "",
              t.pointsUvs ? "#define USE_POINTS_UV" : "",
              t.gradientMap ? "#define USE_GRADIENTMAP" : "",
              t.flatShading ? "#define FLAT_SHADED" : "",
              t.doubleSided ? "#define DOUBLE_SIDED" : "",
              t.flipSided ? "#define FLIP_SIDED" : "",
              t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
              t.shadowMapEnabled ? "#define " + _ : "",
              t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
              t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
              t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
              t.decodeVideoTextureEmissive
                ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE"
                : "",
              t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
              t.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "",
              "uniform mat4 viewMatrix;",
              "uniform vec3 cameraPosition;",
              "uniform bool isOrthographic;",
              t.toneMapping !== i.y_p ? "#define TONE_MAPPING" : "",
              t.toneMapping !== i.y_p ? o.tonemapping_pars_fragment : "",
              t.toneMapping !== i.y_p
                ? (function (e, n) {
                    let t;
                    switch (n) {
                      case i.kyO:
                        t = "Linear";
                        break;
                      case i.Mjd:
                        t = "Reinhard";
                        break;
                      case i.nNL:
                        t = "Cineon";
                        break;
                      case i.FV:
                        t = "ACESFilmic";
                        break;
                      case i.LAk:
                        t = "AgX";
                        break;
                      case i.aJ8:
                        t = "Neutral";
                        break;
                      case i.g7M:
                        t = "Custom";
                        break;
                      default:
                        console.warn(
                          "THREE.WebGLProgram: Unsupported toneMapping:",
                          n
                        ),
                          (t = "Linear");
                    }
                    return (
                      "vec3 " +
                      e +
                      "( vec3 color ) { return " +
                      t +
                      "ToneMapping( color ); }"
                    );
                  })("toneMapping", t.toneMapping)
                : "",
              t.dithering ? "#define DITHERING" : "",
              t.opaque ? "#define OPAQUE" : "",
              o.colorspace_pars_fragment,
              (function (e, n) {
                let t = (function (e) {
                  i.ppV._getMatrix(eK, i.ppV.workingColorSpace, e);
                  let n = `mat3( ${eK.elements.map((e) => e.toFixed(4))} )`;
                  switch (i.ppV.getTransfer(e)) {
                    case i.VxR:
                      return [n, "LinearTransferOETF"];
                    case i.KLL:
                      return [n, "sRGBTransferOETF"];
                    default:
                      return (
                        console.warn(
                          "THREE.WebGLProgram: Unsupported color space: ",
                          e
                        ),
                        [n, "LinearTransferOETF"]
                      );
                  }
                })(n);
                return `vec4 ${e}( vec4 value ) {
	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );
}`;
              })("linearToOutputTexel", t.outputColorSpace),
              (function () {
                i.ppV.getLuminanceCoefficients(ej);
                let e = ej.x.toFixed(4),
                  n = ej.y.toFixed(4),
                  t = ej.z.toFixed(4);
                return `float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( ${e}, ${n}, ${t} );
	return dot( weights, rgb );
}`;
              })(),
              t.useDepthPacking
                ? "#define DEPTH_PACKING " + t.depthPacking
                : "",
              "\n",
            ]
              .filter(eQ)
              .join("\n"))),
          (m = e$((m = eZ((m = e0(m)), t)), t)),
          (h = e$((h = eZ((h = e0(h)), t)), t)),
          (m = e4(m)),
          (h = e4(h)),
          !0 !== t.isRawShaderMaterial &&
            ((R = "#version 300 es\n"),
            (a =
              [
                T,
                "#define attribute in",
                "#define varying out",
                "#define texture2D texture",
              ].join("\n") +
              "\n" +
              a),
            (l =
              [
                "#define varying in",
                t.glslVersion === i.Wdf
                  ? ""
                  : "layout(location = 0) out highp vec4 pc_fragColor;",
                t.glslVersion === i.Wdf
                  ? ""
                  : "#define gl_FragColor pc_fragColor",
                "#define gl_FragDepthEXT gl_FragDepth",
                "#define texture2D texture",
                "#define textureCube texture",
                "#define texture2DProj textureProj",
                "#define texture2DLodEXT textureLod",
                "#define texture2DProjLodEXT textureProjLod",
                "#define textureCubeLodEXT textureLod",
                "#define texture2DGradEXT textureGrad",
                "#define texture2DProjGradEXT textureProjGrad",
                "#define textureCubeGradEXT textureGrad",
              ].join("\n") +
              "\n" +
              l));
        let A = R + a + m,
          b = R + l + h,
          C = eX(f, f.VERTEX_SHADER, A),
          L = eX(f, f.FRAGMENT_SHADER, b);
        function P(n) {
          if (e.debug.checkShaderErrors) {
            let t = f.getProgramInfoLog(x).trim(),
              i = f.getShaderInfoLog(C).trim(),
              r = f.getShaderInfoLog(L).trim(),
              o = !0,
              s = !0;
            if (!1 === f.getProgramParameter(x, f.LINK_STATUS)) {
              if (((o = !1), "function" == typeof e.debug.onShaderError))
                e.debug.onShaderError(f, x, C, L);
              else {
                let e = eq(f, C, "vertex"),
                  i = eq(f, L, "fragment");
                console.error(
                  "THREE.WebGLProgram: Shader Error " +
                    f.getError() +
                    " - VALIDATE_STATUS " +
                    f.getProgramParameter(x, f.VALIDATE_STATUS) +
                    "\n\nMaterial Name: " +
                    n.name +
                    "\nMaterial Type: " +
                    n.type +
                    "\n\nProgram Info Log: " +
                    t +
                    "\n" +
                    e +
                    "\n" +
                    i
                );
              }
            } else
              "" !== t
                ? console.warn("THREE.WebGLProgram: Program Info Log:", t)
                : ("" === i || "" === r) && (s = !1);
            s &&
              (n.diagnostics = {
                runnable: o,
                programLog: t,
                vertexShader: { log: i, prefix: a },
                fragmentShader: { log: r, prefix: l },
              });
          }
          f.deleteShader(C),
            f.deleteShader(L),
            (s = new eW(f, x)),
            (c = (function (e, n) {
              let t = {},
                i = e.getProgramParameter(n, e.ACTIVE_ATTRIBUTES);
              for (let r = 0; r < i; r++) {
                let i = e.getActiveAttrib(n, r),
                  a = i.name,
                  o = 1;
                i.type === e.FLOAT_MAT2 && (o = 2),
                  i.type === e.FLOAT_MAT3 && (o = 3),
                  i.type === e.FLOAT_MAT4 && (o = 4),
                  (t[a] = {
                    type: i.type,
                    location: e.getAttribLocation(n, a),
                    locationSize: o,
                  });
              }
              return t;
            })(f, x));
        }
        f.attachShader(x, C),
          f.attachShader(x, L),
          void 0 !== t.index0AttributeName
            ? f.bindAttribLocation(x, 0, t.index0AttributeName)
            : !0 === t.morphTargets && f.bindAttribLocation(x, 0, "position"),
          f.linkProgram(x),
          (this.getUniforms = function () {
            return void 0 === s && P(this), s;
          }),
          (this.getAttributes = function () {
            return void 0 === c && P(this), c;
          });
        let U = !1 === t.rendererExtensionParallelShaderCompile;
        return (
          (this.isReady = function () {
            return !1 === U && (U = f.getProgramParameter(x, 37297)), U;
          }),
          (this.destroy = function () {
            r.releaseStatesOfProgram(this),
              f.deleteProgram(x),
              (this.program = void 0);
          }),
          (this.type = t.shaderType),
          (this.name = t.shaderName),
          (this.id = eY++),
          (this.cacheKey = n),
          (this.usedTimes = 1),
          (this.program = x),
          (this.vertexShader = C),
          (this.fragmentShader = L),
          this
        );
      }
      let e8 = 0;
      class e7 {
        constructor() {
          (this.shaderCache = new Map()), (this.materialCache = new Map());
        }
        update(e) {
          let n = e.vertexShader,
            t = e.fragmentShader,
            i = this._getShaderStage(n),
            r = this._getShaderStage(t),
            a = this._getShaderCacheForMaterial(e);
          return (
            !1 === a.has(i) && (a.add(i), i.usedTimes++),
            !1 === a.has(r) && (a.add(r), r.usedTimes++),
            this
          );
        }
        remove(e) {
          for (let n of this.materialCache.get(e))
            n.usedTimes--, 0 === n.usedTimes && this.shaderCache.delete(n.code);
          return this.materialCache.delete(e), this;
        }
        getVertexShaderID(e) {
          return this._getShaderStage(e.vertexShader).id;
        }
        getFragmentShaderID(e) {
          return this._getShaderStage(e.fragmentShader).id;
        }
        dispose() {
          this.shaderCache.clear(), this.materialCache.clear();
        }
        _getShaderCacheForMaterial(e) {
          let n = this.materialCache,
            t = n.get(e);
          return void 0 === t && ((t = new Set()), n.set(e, t)), t;
        }
        _getShaderStage(e) {
          let n = this.shaderCache,
            t = n.get(e);
          return void 0 === t && ((t = new ne(e)), n.set(e, t)), t;
        }
      }
      class ne {
        constructor(e) {
          (this.id = e8++), (this.code = e), (this.usedTimes = 0);
        }
      }
      function nn(e, n, t, r, a, o, l) {
        let c = new i.zgK(),
          d = new e7(),
          u = new Set(),
          f = [],
          p = a.logarithmicDepthBuffer,
          m = a.vertexTextures,
          h = a.precision,
          _ = {
            MeshDepthMaterial: "depth",
            MeshDistanceMaterial: "distanceRGBA",
            MeshNormalMaterial: "normal",
            MeshBasicMaterial: "basic",
            MeshLambertMaterial: "lambert",
            MeshPhongMaterial: "phong",
            MeshToonMaterial: "toon",
            MeshStandardMaterial: "physical",
            MeshPhysicalMaterial: "physical",
            MeshMatcapMaterial: "matcap",
            LineBasicMaterial: "basic",
            LineDashedMaterial: "dashed",
            PointsMaterial: "points",
            ShadowMaterial: "shadow",
            SpriteMaterial: "sprite",
          };
        function g(e) {
          return (u.add(e), 0 === e) ? "uv" : `uv${e}`;
        }
        return {
          getParameters: function (o, c, f, v, E) {
            let S, T, M, x;
            let R = v.fog,
              A = E.geometry,
              b = o.isMeshStandardMaterial ? v.environment : null,
              C = (o.isMeshStandardMaterial ? t : n).get(o.envMap || b),
              L = C && C.mapping === i.Om ? C.image.height : null,
              P = _[o.type];
            null !== o.precision &&
              (h = a.getMaxPrecision(o.precision)) !== o.precision &&
              console.warn(
                "THREE.WebGLProgram.getParameters:",
                o.precision,
                "not supported, using",
                h,
                "instead."
              );
            let U =
                A.morphAttributes.position ||
                A.morphAttributes.normal ||
                A.morphAttributes.color,
              w = void 0 !== U ? U.length : 0,
              D = 0;
            if (
              (void 0 !== A.morphAttributes.position && (D = 1),
              void 0 !== A.morphAttributes.normal && (D = 2),
              void 0 !== A.morphAttributes.color && (D = 3),
              P)
            ) {
              let e = s[P];
              (S = e.vertexShader), (T = e.fragmentShader);
            } else
              (S = o.vertexShader),
                (T = o.fragmentShader),
                d.update(o),
                (M = d.getVertexShaderID(o)),
                (x = d.getFragmentShaderID(o));
            let y = e.getRenderTarget(),
              I = e.state.buffers.depth.getReversed(),
              N = !0 === E.isInstancedMesh,
              O = !0 === E.isBatchedMesh,
              F = !!o.map,
              B = !!o.matcap,
              H = !!C,
              G = !!o.aoMap,
              V = !!o.lightMap,
              k = !!o.bumpMap,
              z = !!o.normalMap,
              W = !!o.displacementMap,
              X = !!o.emissiveMap,
              Y = !!o.metalnessMap,
              K = !!o.roughnessMap,
              q = o.anisotropy > 0,
              j = o.clearcoat > 0,
              Q = o.dispersion > 0,
              Z = o.iridescence > 0,
              $ = o.sheen > 0,
              J = o.transmission > 0,
              ee = q && !!o.anisotropyMap,
              en = j && !!o.clearcoatMap,
              et = j && !!o.clearcoatNormalMap,
              ei = j && !!o.clearcoatRoughnessMap,
              er = Z && !!o.iridescenceMap,
              ea = Z && !!o.iridescenceThicknessMap,
              eo = $ && !!o.sheenColorMap,
              el = $ && !!o.sheenRoughnessMap,
              es = !!o.specularMap,
              ec = !!o.specularColorMap,
              ed = !!o.specularIntensityMap,
              eu = J && !!o.transmissionMap,
              ef = J && !!o.thicknessMap,
              ep = !!o.gradientMap,
              em = !!o.alphaMap,
              eh = o.alphaTest > 0,
              e_ = !!o.alphaHash,
              eg = !!o.extensions,
              ev = i.y_p;
            o.toneMapped &&
              (null === y || !0 === y.isXRRenderTarget) &&
              (ev = e.toneMapping);
            let eE = {
              shaderID: P,
              shaderType: o.type,
              shaderName: o.name,
              vertexShader: S,
              fragmentShader: T,
              defines: o.defines,
              customVertexShaderID: M,
              customFragmentShaderID: x,
              isRawShaderMaterial: !0 === o.isRawShaderMaterial,
              glslVersion: o.glslVersion,
              precision: h,
              batching: O,
              batchingColor: O && null !== E._colorsTexture,
              instancing: N,
              instancingColor: N && null !== E.instanceColor,
              instancingMorph: N && null !== E.morphTexture,
              supportsVertexTextures: m,
              outputColorSpace:
                null === y
                  ? e.outputColorSpace
                  : !0 === y.isXRRenderTarget
                  ? y.texture.colorSpace
                  : i.Zr2,
              alphaToCoverage: !!o.alphaToCoverage,
              map: F,
              matcap: B,
              envMap: H,
              envMapMode: H && C.mapping,
              envMapCubeUVHeight: L,
              aoMap: G,
              lightMap: V,
              bumpMap: k,
              normalMap: z,
              displacementMap: m && W,
              emissiveMap: X,
              normalMapObjectSpace: z && o.normalMapType === i.vyJ,
              normalMapTangentSpace: z && o.normalMapType === i.bI3,
              metalnessMap: Y,
              roughnessMap: K,
              anisotropy: q,
              anisotropyMap: ee,
              clearcoat: j,
              clearcoatMap: en,
              clearcoatNormalMap: et,
              clearcoatRoughnessMap: ei,
              dispersion: Q,
              iridescence: Z,
              iridescenceMap: er,
              iridescenceThicknessMap: ea,
              sheen: $,
              sheenColorMap: eo,
              sheenRoughnessMap: el,
              specularMap: es,
              specularColorMap: ec,
              specularIntensityMap: ed,
              transmission: J,
              transmissionMap: eu,
              thicknessMap: ef,
              gradientMap: ep,
              opaque:
                !1 === o.transparent &&
                o.blending === i.NTi &&
                !1 === o.alphaToCoverage,
              alphaMap: em,
              alphaTest: eh,
              alphaHash: e_,
              combine: o.combine,
              mapUv: F && g(o.map.channel),
              aoMapUv: G && g(o.aoMap.channel),
              lightMapUv: V && g(o.lightMap.channel),
              bumpMapUv: k && g(o.bumpMap.channel),
              normalMapUv: z && g(o.normalMap.channel),
              displacementMapUv: W && g(o.displacementMap.channel),
              emissiveMapUv: X && g(o.emissiveMap.channel),
              metalnessMapUv: Y && g(o.metalnessMap.channel),
              roughnessMapUv: K && g(o.roughnessMap.channel),
              anisotropyMapUv: ee && g(o.anisotropyMap.channel),
              clearcoatMapUv: en && g(o.clearcoatMap.channel),
              clearcoatNormalMapUv: et && g(o.clearcoatNormalMap.channel),
              clearcoatRoughnessMapUv: ei && g(o.clearcoatRoughnessMap.channel),
              iridescenceMapUv: er && g(o.iridescenceMap.channel),
              iridescenceThicknessMapUv:
                ea && g(o.iridescenceThicknessMap.channel),
              sheenColorMapUv: eo && g(o.sheenColorMap.channel),
              sheenRoughnessMapUv: el && g(o.sheenRoughnessMap.channel),
              specularMapUv: es && g(o.specularMap.channel),
              specularColorMapUv: ec && g(o.specularColorMap.channel),
              specularIntensityMapUv: ed && g(o.specularIntensityMap.channel),
              transmissionMapUv: eu && g(o.transmissionMap.channel),
              thicknessMapUv: ef && g(o.thicknessMap.channel),
              alphaMapUv: em && g(o.alphaMap.channel),
              vertexTangents: !!A.attributes.tangent && (z || q),
              vertexColors: o.vertexColors,
              vertexAlphas:
                !0 === o.vertexColors &&
                !!A.attributes.color &&
                4 === A.attributes.color.itemSize,
              pointsUvs: !0 === E.isPoints && !!A.attributes.uv && (F || em),
              fog: !!R,
              useFog: !0 === o.fog,
              fogExp2: !!R && R.isFogExp2,
              flatShading: !0 === o.flatShading,
              sizeAttenuation: !0 === o.sizeAttenuation,
              logarithmicDepthBuffer: p,
              reverseDepthBuffer: I,
              skinning: !0 === E.isSkinnedMesh,
              morphTargets: void 0 !== A.morphAttributes.position,
              morphNormals: void 0 !== A.morphAttributes.normal,
              morphColors: void 0 !== A.morphAttributes.color,
              morphTargetsCount: w,
              morphTextureStride: D,
              numDirLights: c.directional.length,
              numPointLights: c.point.length,
              numSpotLights: c.spot.length,
              numSpotLightMaps: c.spotLightMap.length,
              numRectAreaLights: c.rectArea.length,
              numHemiLights: c.hemi.length,
              numDirLightShadows: c.directionalShadowMap.length,
              numPointLightShadows: c.pointShadowMap.length,
              numSpotLightShadows: c.spotShadowMap.length,
              numSpotLightShadowsWithMaps: c.numSpotLightShadowsWithMaps,
              numLightProbes: c.numLightProbes,
              numClippingPlanes: l.numPlanes,
              numClipIntersection: l.numIntersection,
              dithering: o.dithering,
              shadowMapEnabled: e.shadowMap.enabled && f.length > 0,
              shadowMapType: e.shadowMap.type,
              toneMapping: ev,
              decodeVideoTexture:
                F &&
                !0 === o.map.isVideoTexture &&
                i.ppV.getTransfer(o.map.colorSpace) === i.KLL,
              decodeVideoTextureEmissive:
                X &&
                !0 === o.emissiveMap.isVideoTexture &&
                i.ppV.getTransfer(o.emissiveMap.colorSpace) === i.KLL,
              premultipliedAlpha: o.premultipliedAlpha,
              doubleSided: o.side === i.$EB,
              flipSided: o.side === i.hsX,
              useDepthPacking: o.depthPacking >= 0,
              depthPacking: o.depthPacking || 0,
              index0AttributeName: o.index0AttributeName,
              extensionClipCullDistance:
                eg &&
                !0 === o.extensions.clipCullDistance &&
                r.has("WEBGL_clip_cull_distance"),
              extensionMultiDraw:
                ((eg && !0 === o.extensions.multiDraw) || O) &&
                r.has("WEBGL_multi_draw"),
              rendererExtensionParallelShaderCompile: r.has(
                "KHR_parallel_shader_compile"
              ),
              customProgramCacheKey: o.customProgramCacheKey(),
            };
            return (
              (eE.vertexUv1s = u.has(1)),
              (eE.vertexUv2s = u.has(2)),
              (eE.vertexUv3s = u.has(3)),
              u.clear(),
              eE
            );
          },
          getProgramCacheKey: function (n) {
            let t = [];
            if (
              (n.shaderID
                ? t.push(n.shaderID)
                : (t.push(n.customVertexShaderID),
                  t.push(n.customFragmentShaderID)),
              void 0 !== n.defines)
            )
              for (let e in n.defines) t.push(e), t.push(n.defines[e]);
            return (
              !1 === n.isRawShaderMaterial &&
                (t.push(n.precision),
                t.push(n.outputColorSpace),
                t.push(n.envMapMode),
                t.push(n.envMapCubeUVHeight),
                t.push(n.mapUv),
                t.push(n.alphaMapUv),
                t.push(n.lightMapUv),
                t.push(n.aoMapUv),
                t.push(n.bumpMapUv),
                t.push(n.normalMapUv),
                t.push(n.displacementMapUv),
                t.push(n.emissiveMapUv),
                t.push(n.metalnessMapUv),
                t.push(n.roughnessMapUv),
                t.push(n.anisotropyMapUv),
                t.push(n.clearcoatMapUv),
                t.push(n.clearcoatNormalMapUv),
                t.push(n.clearcoatRoughnessMapUv),
                t.push(n.iridescenceMapUv),
                t.push(n.iridescenceThicknessMapUv),
                t.push(n.sheenColorMapUv),
                t.push(n.sheenRoughnessMapUv),
                t.push(n.specularMapUv),
                t.push(n.specularColorMapUv),
                t.push(n.specularIntensityMapUv),
                t.push(n.transmissionMapUv),
                t.push(n.thicknessMapUv),
                t.push(n.combine),
                t.push(n.fogExp2),
                t.push(n.sizeAttenuation),
                t.push(n.morphTargetsCount),
                t.push(n.morphAttributeCount),
                t.push(n.numDirLights),
                t.push(n.numPointLights),
                t.push(n.numSpotLights),
                t.push(n.numSpotLightMaps),
                t.push(n.numHemiLights),
                t.push(n.numRectAreaLights),
                t.push(n.numDirLightShadows),
                t.push(n.numPointLightShadows),
                t.push(n.numSpotLightShadows),
                t.push(n.numSpotLightShadowsWithMaps),
                t.push(n.numLightProbes),
                t.push(n.shadowMapType),
                t.push(n.toneMapping),
                t.push(n.numClippingPlanes),
                t.push(n.numClipIntersection),
                t.push(n.depthPacking),
                c.disableAll(),
                n.supportsVertexTextures && c.enable(0),
                n.instancing && c.enable(1),
                n.instancingColor && c.enable(2),
                n.instancingMorph && c.enable(3),
                n.matcap && c.enable(4),
                n.envMap && c.enable(5),
                n.normalMapObjectSpace && c.enable(6),
                n.normalMapTangentSpace && c.enable(7),
                n.clearcoat && c.enable(8),
                n.iridescence && c.enable(9),
                n.alphaTest && c.enable(10),
                n.vertexColors && c.enable(11),
                n.vertexAlphas && c.enable(12),
                n.vertexUv1s && c.enable(13),
                n.vertexUv2s && c.enable(14),
                n.vertexUv3s && c.enable(15),
                n.vertexTangents && c.enable(16),
                n.anisotropy && c.enable(17),
                n.alphaHash && c.enable(18),
                n.batching && c.enable(19),
                n.dispersion && c.enable(20),
                n.batchingColor && c.enable(21),
                t.push(c.mask),
                c.disableAll(),
                n.fog && c.enable(0),
                n.useFog && c.enable(1),
                n.flatShading && c.enable(2),
                n.logarithmicDepthBuffer && c.enable(3),
                n.reverseDepthBuffer && c.enable(4),
                n.skinning && c.enable(5),
                n.morphTargets && c.enable(6),
                n.morphNormals && c.enable(7),
                n.morphColors && c.enable(8),
                n.premultipliedAlpha && c.enable(9),
                n.shadowMapEnabled && c.enable(10),
                n.doubleSided && c.enable(11),
                n.flipSided && c.enable(12),
                n.useDepthPacking && c.enable(13),
                n.dithering && c.enable(14),
                n.transmission && c.enable(15),
                n.sheen && c.enable(16),
                n.opaque && c.enable(17),
                n.pointsUvs && c.enable(18),
                n.decodeVideoTexture && c.enable(19),
                n.decodeVideoTextureEmissive && c.enable(20),
                n.alphaToCoverage && c.enable(21),
                t.push(c.mask),
                t.push(e.outputColorSpace)),
              t.push(n.customProgramCacheKey),
              t.join()
            );
          },
          getUniforms: function (e) {
            let n;
            let t = _[e.type];
            if (t) {
              let e = s[t];
              n = i.LlO.clone(e.uniforms);
            } else n = e.uniforms;
            return n;
          },
          acquireProgram: function (n, t) {
            let i;
            for (let e = 0, n = f.length; e < n; e++) {
              let n = f[e];
              if (n.cacheKey === t) {
                (i = n), ++i.usedTimes;
                break;
              }
            }
            return void 0 === i && ((i = new e9(e, t, n, o)), f.push(i)), i;
          },
          releaseProgram: function (e) {
            if (0 == --e.usedTimes) {
              let n = f.indexOf(e);
              (f[n] = f[f.length - 1]), f.pop(), e.destroy();
            }
          },
          releaseShaderCache: function (e) {
            d.remove(e);
          },
          programs: f,
          dispose: function () {
            d.dispose();
          },
        };
      }
      function nt() {
        let e = new WeakMap();
        return {
          has: function (n) {
            return e.has(n);
          },
          get: function (n) {
            let t = e.get(n);
            return void 0 === t && ((t = {}), e.set(n, t)), t;
          },
          remove: function (n) {
            e.delete(n);
          },
          update: function (n, t, i) {
            e.get(n)[t] = i;
          },
          dispose: function () {
            e = new WeakMap();
          },
        };
      }
      function ni(e, n) {
        return e.groupOrder !== n.groupOrder
          ? e.groupOrder - n.groupOrder
          : e.renderOrder !== n.renderOrder
          ? e.renderOrder - n.renderOrder
          : e.material.id !== n.material.id
          ? e.material.id - n.material.id
          : e.z !== n.z
          ? e.z - n.z
          : e.id - n.id;
      }
      function nr(e, n) {
        return e.groupOrder !== n.groupOrder
          ? e.groupOrder - n.groupOrder
          : e.renderOrder !== n.renderOrder
          ? e.renderOrder - n.renderOrder
          : e.z !== n.z
          ? n.z - e.z
          : e.id - n.id;
      }
      function na() {
        let e = [],
          n = 0,
          t = [],
          i = [],
          r = [];
        function a(t, i, r, a, o, l) {
          let s = e[n];
          return (
            void 0 === s
              ? ((s = {
                  id: t.id,
                  object: t,
                  geometry: i,
                  material: r,
                  groupOrder: a,
                  renderOrder: t.renderOrder,
                  z: o,
                  group: l,
                }),
                (e[n] = s))
              : ((s.id = t.id),
                (s.object = t),
                (s.geometry = i),
                (s.material = r),
                (s.groupOrder = a),
                (s.renderOrder = t.renderOrder),
                (s.z = o),
                (s.group = l)),
            n++,
            s
          );
        }
        return {
          opaque: t,
          transmissive: i,
          transparent: r,
          init: function () {
            (n = 0), (t.length = 0), (i.length = 0), (r.length = 0);
          },
          push: function (e, n, o, l, s, c) {
            let d = a(e, n, o, l, s, c);
            o.transmission > 0
              ? i.push(d)
              : !0 === o.transparent
              ? r.push(d)
              : t.push(d);
          },
          unshift: function (e, n, o, l, s, c) {
            let d = a(e, n, o, l, s, c);
            o.transmission > 0
              ? i.unshift(d)
              : !0 === o.transparent
              ? r.unshift(d)
              : t.unshift(d);
          },
          finish: function () {
            for (let t = n, i = e.length; t < i; t++) {
              let n = e[t];
              if (null === n.id) break;
              (n.id = null),
                (n.object = null),
                (n.geometry = null),
                (n.material = null),
                (n.group = null);
            }
          },
          sort: function (e, n) {
            t.length > 1 && t.sort(e || ni),
              i.length > 1 && i.sort(n || nr),
              r.length > 1 && r.sort(n || nr);
          },
        };
      }
      function no() {
        let e = new WeakMap();
        return {
          get: function (n, t) {
            let i;
            let r = e.get(n);
            return (
              void 0 === r
                ? ((i = new na()), e.set(n, [i]))
                : t >= r.length
                ? ((i = new na()), r.push(i))
                : (i = r[t]),
              i
            );
          },
          dispose: function () {
            e = new WeakMap();
          },
        };
      }
      function nl() {
        let e = {};
        return {
          get: function (n) {
            let t;
            if (void 0 !== e[n.id]) return e[n.id];
            switch (n.type) {
              case "DirectionalLight":
                t = { direction: new i.Pq0(), color: new i.Q1f() };
                break;
              case "SpotLight":
                t = {
                  position: new i.Pq0(),
                  direction: new i.Pq0(),
                  color: new i.Q1f(),
                  distance: 0,
                  coneCos: 0,
                  penumbraCos: 0,
                  decay: 0,
                };
                break;
              case "PointLight":
                t = {
                  position: new i.Pq0(),
                  color: new i.Q1f(),
                  distance: 0,
                  decay: 0,
                };
                break;
              case "HemisphereLight":
                t = {
                  direction: new i.Pq0(),
                  skyColor: new i.Q1f(),
                  groundColor: new i.Q1f(),
                };
                break;
              case "RectAreaLight":
                t = {
                  color: new i.Q1f(),
                  position: new i.Pq0(),
                  halfWidth: new i.Pq0(),
                  halfHeight: new i.Pq0(),
                };
            }
            return (e[n.id] = t), t;
          },
        };
      }
      let ns = 0;
      function nc(e, n) {
        return (
          (n.castShadow ? 2 : 0) -
          (e.castShadow ? 2 : 0) +
          (n.map ? 1 : 0) -
          (e.map ? 1 : 0)
        );
      }
      function nd(e) {
        let n = new nl(),
          t = (function () {
            let e = {};
            return {
              get: function (n) {
                let t;
                if (void 0 !== e[n.id]) return e[n.id];
                switch (n.type) {
                  case "DirectionalLight":
                  case "SpotLight":
                    t = {
                      shadowIntensity: 1,
                      shadowBias: 0,
                      shadowNormalBias: 0,
                      shadowRadius: 1,
                      shadowMapSize: new i.I9Y(),
                    };
                    break;
                  case "PointLight":
                    t = {
                      shadowIntensity: 1,
                      shadowBias: 0,
                      shadowNormalBias: 0,
                      shadowRadius: 1,
                      shadowMapSize: new i.I9Y(),
                      shadowCameraNear: 1,
                      shadowCameraFar: 1e3,
                    };
                }
                return (e[n.id] = t), t;
              },
            };
          })(),
          r = {
            version: 0,
            hash: {
              directionalLength: -1,
              pointLength: -1,
              spotLength: -1,
              rectAreaLength: -1,
              hemiLength: -1,
              numDirectionalShadows: -1,
              numPointShadows: -1,
              numSpotShadows: -1,
              numSpotMaps: -1,
              numLightProbes: -1,
            },
            ambient: [0, 0, 0],
            probe: [],
            directional: [],
            directionalShadow: [],
            directionalShadowMap: [],
            directionalShadowMatrix: [],
            spot: [],
            spotLightMap: [],
            spotShadow: [],
            spotShadowMap: [],
            spotLightMatrix: [],
            rectArea: [],
            rectAreaLTC1: null,
            rectAreaLTC2: null,
            point: [],
            pointShadow: [],
            pointShadowMap: [],
            pointShadowMatrix: [],
            hemi: [],
            numSpotLightShadowsWithMaps: 0,
            numLightProbes: 0,
          };
        for (let e = 0; e < 9; e++) r.probe.push(new i.Pq0());
        let a = new i.Pq0(),
          o = new i.kn4(),
          s = new i.kn4();
        return {
          setup: function (i) {
            let a = 0,
              o = 0,
              s = 0;
            for (let e = 0; e < 9; e++) r.probe[e].set(0, 0, 0);
            let c = 0,
              d = 0,
              u = 0,
              f = 0,
              p = 0,
              m = 0,
              h = 0,
              _ = 0,
              g = 0,
              v = 0,
              E = 0;
            i.sort(nc);
            for (let e = 0, l = i.length; e < l; e++) {
              let l = i[e],
                S = l.color,
                T = l.intensity,
                M = l.distance,
                x = l.shadow && l.shadow.map ? l.shadow.map.texture : null;
              if (l.isAmbientLight)
                (a += S.r * T), (o += S.g * T), (s += S.b * T);
              else if (l.isLightProbe) {
                for (let e = 0; e < 9; e++)
                  r.probe[e].addScaledVector(l.sh.coefficients[e], T);
                E++;
              } else if (l.isDirectionalLight) {
                let e = n.get(l);
                if (
                  (e.color.copy(l.color).multiplyScalar(l.intensity),
                  l.castShadow)
                ) {
                  let e = l.shadow,
                    n = t.get(l);
                  (n.shadowIntensity = e.intensity),
                    (n.shadowBias = e.bias),
                    (n.shadowNormalBias = e.normalBias),
                    (n.shadowRadius = e.radius),
                    (n.shadowMapSize = e.mapSize),
                    (r.directionalShadow[c] = n),
                    (r.directionalShadowMap[c] = x),
                    (r.directionalShadowMatrix[c] = l.shadow.matrix),
                    m++;
                }
                (r.directional[c] = e), c++;
              } else if (l.isSpotLight) {
                let e = n.get(l);
                e.position.setFromMatrixPosition(l.matrixWorld),
                  e.color.copy(S).multiplyScalar(T),
                  (e.distance = M),
                  (e.coneCos = Math.cos(l.angle)),
                  (e.penumbraCos = Math.cos(l.angle * (1 - l.penumbra))),
                  (e.decay = l.decay),
                  (r.spot[u] = e);
                let i = l.shadow;
                if (
                  (l.map &&
                    ((r.spotLightMap[g] = l.map),
                    g++,
                    i.updateMatrices(l),
                    l.castShadow && v++),
                  (r.spotLightMatrix[u] = i.matrix),
                  l.castShadow)
                ) {
                  let e = t.get(l);
                  (e.shadowIntensity = i.intensity),
                    (e.shadowBias = i.bias),
                    (e.shadowNormalBias = i.normalBias),
                    (e.shadowRadius = i.radius),
                    (e.shadowMapSize = i.mapSize),
                    (r.spotShadow[u] = e),
                    (r.spotShadowMap[u] = x),
                    _++;
                }
                u++;
              } else if (l.isRectAreaLight) {
                let e = n.get(l);
                e.color.copy(S).multiplyScalar(T),
                  e.halfWidth.set(0.5 * l.width, 0, 0),
                  e.halfHeight.set(0, 0.5 * l.height, 0),
                  (r.rectArea[f] = e),
                  f++;
              } else if (l.isPointLight) {
                let e = n.get(l);
                if (
                  (e.color.copy(l.color).multiplyScalar(l.intensity),
                  (e.distance = l.distance),
                  (e.decay = l.decay),
                  l.castShadow)
                ) {
                  let e = l.shadow,
                    n = t.get(l);
                  (n.shadowIntensity = e.intensity),
                    (n.shadowBias = e.bias),
                    (n.shadowNormalBias = e.normalBias),
                    (n.shadowRadius = e.radius),
                    (n.shadowMapSize = e.mapSize),
                    (n.shadowCameraNear = e.camera.near),
                    (n.shadowCameraFar = e.camera.far),
                    (r.pointShadow[d] = n),
                    (r.pointShadowMap[d] = x),
                    (r.pointShadowMatrix[d] = l.shadow.matrix),
                    h++;
                }
                (r.point[d] = e), d++;
              } else if (l.isHemisphereLight) {
                let e = n.get(l);
                e.skyColor.copy(l.color).multiplyScalar(T),
                  e.groundColor.copy(l.groundColor).multiplyScalar(T),
                  (r.hemi[p] = e),
                  p++;
              }
            }
            f > 0 &&
              (!0 === e.has("OES_texture_float_linear")
                ? ((r.rectAreaLTC1 = l.LTC_FLOAT_1),
                  (r.rectAreaLTC2 = l.LTC_FLOAT_2))
                : ((r.rectAreaLTC1 = l.LTC_HALF_1),
                  (r.rectAreaLTC2 = l.LTC_HALF_2))),
              (r.ambient[0] = a),
              (r.ambient[1] = o),
              (r.ambient[2] = s);
            let S = r.hash;
            (S.directionalLength !== c ||
              S.pointLength !== d ||
              S.spotLength !== u ||
              S.rectAreaLength !== f ||
              S.hemiLength !== p ||
              S.numDirectionalShadows !== m ||
              S.numPointShadows !== h ||
              S.numSpotShadows !== _ ||
              S.numSpotMaps !== g ||
              S.numLightProbes !== E) &&
              ((r.directional.length = c),
              (r.spot.length = u),
              (r.rectArea.length = f),
              (r.point.length = d),
              (r.hemi.length = p),
              (r.directionalShadow.length = m),
              (r.directionalShadowMap.length = m),
              (r.pointShadow.length = h),
              (r.pointShadowMap.length = h),
              (r.spotShadow.length = _),
              (r.spotShadowMap.length = _),
              (r.directionalShadowMatrix.length = m),
              (r.pointShadowMatrix.length = h),
              (r.spotLightMatrix.length = _ + g - v),
              (r.spotLightMap.length = g),
              (r.numSpotLightShadowsWithMaps = v),
              (r.numLightProbes = E),
              (S.directionalLength = c),
              (S.pointLength = d),
              (S.spotLength = u),
              (S.rectAreaLength = f),
              (S.hemiLength = p),
              (S.numDirectionalShadows = m),
              (S.numPointShadows = h),
              (S.numSpotShadows = _),
              (S.numSpotMaps = g),
              (S.numLightProbes = E),
              (r.version = ns++));
          },
          setupView: function (e, n) {
            let t = 0,
              i = 0,
              l = 0,
              c = 0,
              d = 0,
              u = n.matrixWorldInverse;
            for (let n = 0, f = e.length; n < f; n++) {
              let f = e[n];
              if (f.isDirectionalLight) {
                let e = r.directional[t];
                e.direction.setFromMatrixPosition(f.matrixWorld),
                  a.setFromMatrixPosition(f.target.matrixWorld),
                  e.direction.sub(a),
                  e.direction.transformDirection(u),
                  t++;
              } else if (f.isSpotLight) {
                let e = r.spot[l];
                e.position.setFromMatrixPosition(f.matrixWorld),
                  e.position.applyMatrix4(u),
                  e.direction.setFromMatrixPosition(f.matrixWorld),
                  a.setFromMatrixPosition(f.target.matrixWorld),
                  e.direction.sub(a),
                  e.direction.transformDirection(u),
                  l++;
              } else if (f.isRectAreaLight) {
                let e = r.rectArea[c];
                e.position.setFromMatrixPosition(f.matrixWorld),
                  e.position.applyMatrix4(u),
                  s.identity(),
                  o.copy(f.matrixWorld),
                  o.premultiply(u),
                  s.extractRotation(o),
                  e.halfWidth.set(0.5 * f.width, 0, 0),
                  e.halfHeight.set(0, 0.5 * f.height, 0),
                  e.halfWidth.applyMatrix4(s),
                  e.halfHeight.applyMatrix4(s),
                  c++;
              } else if (f.isPointLight) {
                let e = r.point[i];
                e.position.setFromMatrixPosition(f.matrixWorld),
                  e.position.applyMatrix4(u),
                  i++;
              } else if (f.isHemisphereLight) {
                let e = r.hemi[d];
                e.direction.setFromMatrixPosition(f.matrixWorld),
                  e.direction.transformDirection(u),
                  d++;
              }
            }
          },
          state: r,
        };
      }
      function nu(e) {
        let n = new nd(e),
          t = [],
          i = [],
          r = {
            lightsArray: t,
            shadowsArray: i,
            camera: null,
            lights: n,
            transmissionRenderTarget: {},
          };
        return {
          init: function (e) {
            (r.camera = e), (t.length = 0), (i.length = 0);
          },
          state: r,
          setupLights: function () {
            n.setup(t);
          },
          setupLightsView: function (e) {
            n.setupView(t, e);
          },
          pushLight: function (e) {
            t.push(e);
          },
          pushShadow: function (e) {
            i.push(e);
          },
        };
      }
      function nf(e) {
        let n = new WeakMap();
        return {
          get: function (t, i = 0) {
            let r;
            let a = n.get(t);
            return (
              void 0 === a
                ? ((r = new nu(e)), n.set(t, [r]))
                : i >= a.length
                ? ((r = new nu(e)), a.push(r))
                : (r = a[i]),
              r
            );
          },
          dispose: function () {
            n = new WeakMap();
          },
        };
      }
      function np(e, n, t) {
        let r = new i.PPD(),
          a = new i.I9Y(),
          o = new i.I9Y(),
          l = new i.IUQ(),
          s = new i.CSG({ depthPacking: i.N5j }),
          c = new i.aVO(),
          d = {},
          u = t.maxTextureSize,
          f = { [i.hB5]: i.hsX, [i.hsX]: i.hB5, [i.$EB]: i.$EB },
          p = new i.BKk({
            defines: { VSM_SAMPLES: 8 },
            uniforms: {
              shadow_pass: { value: null },
              resolution: { value: new i.I9Y() },
              radius: { value: 4 },
            },
            vertexShader:
              "void main() {\n	gl_Position = vec4( position, 1.0 );\n}",
            fragmentShader:
              "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n	const float samples = float( VSM_SAMPLES );\n	float mean = 0.0;\n	float squared_mean = 0.0;\n	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n	for ( float i = 0.0; i < samples; i ++ ) {\n		float uvOffset = uvStart + i * uvStride;\n		#ifdef HORIZONTAL_PASS\n			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );\n			mean += distribution.x;\n			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n		#else\n			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );\n			mean += depth;\n			squared_mean += depth * depth;\n		#endif\n	}\n	mean = mean / samples;\n	squared_mean = squared_mean / samples;\n	float std_dev = sqrt( squared_mean - mean * mean );\n	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}",
          }),
          m = p.clone();
        m.defines.HORIZONTAL_PASS = 1;
        let h = new i.LoY();
        h.setAttribute(
          "position",
          new i.THS(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3)
        );
        let _ = new i.eaF(h, p),
          g = this;
        (this.enabled = !1),
          (this.autoUpdate = !0),
          (this.needsUpdate = !1),
          (this.type = i.QP0);
        let v = this.type;
        function E(n, t, r, a) {
          let o = null,
            l =
              !0 === r.isPointLight
                ? n.customDistanceMaterial
                : n.customDepthMaterial;
          if (void 0 !== l) o = l;
          else if (
            ((o = !0 === r.isPointLight ? c : s),
            (e.localClippingEnabled &&
              !0 === t.clipShadows &&
              Array.isArray(t.clippingPlanes) &&
              0 !== t.clippingPlanes.length) ||
              (t.displacementMap && 0 !== t.displacementScale) ||
              (t.alphaMap && t.alphaTest > 0) ||
              (t.map && t.alphaTest > 0))
          ) {
            let e = o.uuid,
              n = t.uuid,
              i = d[e];
            void 0 === i && ((i = {}), (d[e] = i));
            let r = i[n];
            void 0 === r &&
              ((r = o.clone()), (i[n] = r), t.addEventListener("dispose", S)),
              (o = r);
          }
          return (
            (o.visible = t.visible),
            (o.wireframe = t.wireframe),
            a === i.RyA
              ? (o.side = null !== t.shadowSide ? t.shadowSide : t.side)
              : (o.side = null !== t.shadowSide ? t.shadowSide : f[t.side]),
            (o.alphaMap = t.alphaMap),
            (o.alphaTest = t.alphaTest),
            (o.map = t.map),
            (o.clipShadows = t.clipShadows),
            (o.clippingPlanes = t.clippingPlanes),
            (o.clipIntersection = t.clipIntersection),
            (o.displacementMap = t.displacementMap),
            (o.displacementScale = t.displacementScale),
            (o.displacementBias = t.displacementBias),
            (o.wireframeLinewidth = t.wireframeLinewidth),
            (o.linewidth = t.linewidth),
            !0 === r.isPointLight &&
              !0 === o.isMeshDistanceMaterial &&
              (e.properties.get(o).light = r),
            o
          );
        }
        function S(e) {
          for (let n in (e.target.removeEventListener("dispose", S), d)) {
            let t = d[n],
              i = e.target.uuid;
            i in t && (t[i].dispose(), delete t[i]);
          }
        }
        this.render = function (t, s, c) {
          if (
            !1 === g.enabled ||
            (!1 === g.autoUpdate && !1 === g.needsUpdate) ||
            0 === t.length
          )
            return;
          let d = e.getRenderTarget(),
            f = e.getActiveCubeFace(),
            h = e.getActiveMipmapLevel(),
            S = e.state;
          S.setBlending(i.XIg),
            S.buffers.color.setClear(1, 1, 1, 1),
            S.buffers.depth.setTest(!0),
            S.setScissorTest(!1);
          let T = v !== i.RyA && this.type === i.RyA,
            M = v === i.RyA && this.type !== i.RyA;
          for (let d = 0, f = t.length; d < f; d++) {
            let f = t[d],
              h = f.shadow;
            if (void 0 === h) {
              console.warn("THREE.WebGLShadowMap:", f, "has no shadow.");
              continue;
            }
            if (!1 === h.autoUpdate && !1 === h.needsUpdate) continue;
            a.copy(h.mapSize);
            let g = h.getFrameExtents();
            if (
              (a.multiply(g),
              o.copy(h.mapSize),
              (a.x > u || a.y > u) &&
                (a.x > u &&
                  ((o.x = Math.floor(u / g.x)),
                  (a.x = o.x * g.x),
                  (h.mapSize.x = o.x)),
                a.y > u &&
                  ((o.y = Math.floor(u / g.y)),
                  (a.y = o.y * g.y),
                  (h.mapSize.y = o.y))),
              null === h.map || !0 === T || !0 === M)
            ) {
              let e =
                this.type !== i.RyA
                  ? { minFilter: i.hxR, magFilter: i.hxR }
                  : {};
              null !== h.map && h.map.dispose(),
                (h.map = new i.nWS(a.x, a.y, e)),
                (h.map.texture.name = f.name + ".shadowMap"),
                h.camera.updateProjectionMatrix();
            }
            e.setRenderTarget(h.map), e.clear();
            let v = h.getViewportCount();
            for (let t = 0; t < v; t++) {
              let a = h.getViewport(t);
              l.set(o.x * a.x, o.y * a.y, o.x * a.z, o.y * a.w),
                S.viewport(l),
                h.updateMatrices(f, t),
                (r = h.getFrustum()),
                (function t(a, o, l, s, c) {
                  if (!1 === a.visible) return;
                  if (
                    a.layers.test(o.layers) &&
                    (a.isMesh || a.isLine || a.isPoints) &&
                    (a.castShadow || (a.receiveShadow && c === i.RyA)) &&
                    (!a.frustumCulled || r.intersectsObject(a))
                  ) {
                    a.modelViewMatrix.multiplyMatrices(
                      l.matrixWorldInverse,
                      a.matrixWorld
                    );
                    let t = n.update(a),
                      i = a.material;
                    if (Array.isArray(i)) {
                      let n = t.groups;
                      for (let r = 0, d = n.length; r < d; r++) {
                        let d = n[r],
                          u = i[d.materialIndex];
                        if (u && u.visible) {
                          let n = E(a, u, s, c);
                          a.onBeforeShadow(e, a, o, l, t, n, d),
                            e.renderBufferDirect(l, null, t, n, a, d),
                            a.onAfterShadow(e, a, o, l, t, n, d);
                        }
                      }
                    } else if (i.visible) {
                      let n = E(a, i, s, c);
                      a.onBeforeShadow(e, a, o, l, t, n, null),
                        e.renderBufferDirect(l, null, t, n, a, null),
                        a.onAfterShadow(e, a, o, l, t, n, null);
                    }
                  }
                  let d = a.children;
                  for (let e = 0, n = d.length; e < n; e++) t(d[e], o, l, s, c);
                })(s, c, h.camera, f, this.type);
            }
            !0 !== h.isPointLightShadow &&
              this.type === i.RyA &&
              (function (t, r) {
                let o = n.update(_);
                p.defines.VSM_SAMPLES !== t.blurSamples &&
                  ((p.defines.VSM_SAMPLES = t.blurSamples),
                  (m.defines.VSM_SAMPLES = t.blurSamples),
                  (p.needsUpdate = !0),
                  (m.needsUpdate = !0)),
                  null === t.mapPass && (t.mapPass = new i.nWS(a.x, a.y)),
                  (p.uniforms.shadow_pass.value = t.map.texture),
                  (p.uniforms.resolution.value = t.mapSize),
                  (p.uniforms.radius.value = t.radius),
                  e.setRenderTarget(t.mapPass),
                  e.clear(),
                  e.renderBufferDirect(r, null, o, p, _, null),
                  (m.uniforms.shadow_pass.value = t.mapPass.texture),
                  (m.uniforms.resolution.value = t.mapSize),
                  (m.uniforms.radius.value = t.radius),
                  e.setRenderTarget(t.map),
                  e.clear(),
                  e.renderBufferDirect(r, null, o, m, _, null);
              })(h, c),
              (h.needsUpdate = !1);
          }
          (v = this.type), (g.needsUpdate = !1), e.setRenderTarget(d, f, h);
        };
      }
      let nm = {
        [i.eHc]: i.lGu,
        [i.brA]: i.K52,
        [i.U3G]: i.bw0,
        [i.xSv]: i.Gwm,
        [i.lGu]: i.eHc,
        [i.K52]: i.brA,
        [i.bw0]: i.U3G,
        [i.Gwm]: i.xSv,
      };
      function nh(e, n) {
        let t = new (function () {
            let n = !1,
              t = new i.IUQ(),
              r = null,
              a = new i.IUQ(0, 0, 0, 0);
            return {
              setMask: function (t) {
                r === t || n || (e.colorMask(t, t, t, t), (r = t));
              },
              setLocked: function (e) {
                n = e;
              },
              setClear: function (n, i, r, o, l) {
                !0 === l && ((n *= o), (i *= o), (r *= o)),
                  t.set(n, i, r, o),
                  !1 === a.equals(t) && (e.clearColor(n, i, r, o), a.copy(t));
              },
              reset: function () {
                (n = !1), (r = null), a.set(-1, 0, 0, 0);
              },
            };
          })(),
          r = new (function () {
            let t = !1,
              r = !1,
              a = null,
              o = null,
              l = null;
            return {
              setReversed: function (e) {
                if (r !== e) {
                  let e = n.get("EXT_clip_control");
                  r
                    ? e.clipControlEXT(e.LOWER_LEFT_EXT, e.ZERO_TO_ONE_EXT)
                    : e.clipControlEXT(
                        e.LOWER_LEFT_EXT,
                        e.NEGATIVE_ONE_TO_ONE_EXT
                      );
                  let t = l;
                  (l = null), this.setClear(t);
                }
                r = e;
              },
              getReversed: function () {
                return r;
              },
              setTest: function (n) {
                n ? G(e.DEPTH_TEST) : V(e.DEPTH_TEST);
              },
              setMask: function (n) {
                a === n || t || (e.depthMask(n), (a = n));
              },
              setFunc: function (n) {
                if ((r && (n = nm[n]), o !== n)) {
                  switch (n) {
                    case i.eHc:
                      e.depthFunc(e.NEVER);
                      break;
                    case i.lGu:
                      e.depthFunc(e.ALWAYS);
                      break;
                    case i.brA:
                      e.depthFunc(e.LESS);
                      break;
                    case i.xSv:
                      e.depthFunc(e.LEQUAL);
                      break;
                    case i.U3G:
                      e.depthFunc(e.EQUAL);
                      break;
                    case i.Gwm:
                      e.depthFunc(e.GEQUAL);
                      break;
                    case i.K52:
                      e.depthFunc(e.GREATER);
                      break;
                    case i.bw0:
                      e.depthFunc(e.NOTEQUAL);
                      break;
                    default:
                      e.depthFunc(e.LEQUAL);
                  }
                  o = n;
                }
              },
              setLocked: function (e) {
                t = e;
              },
              setClear: function (n) {
                l !== n && (r && (n = 1 - n), e.clearDepth(n), (l = n));
              },
              reset: function () {
                (t = !1), (a = null), (o = null), (l = null), (r = !1);
              },
            };
          })(),
          a = new (function () {
            let n = !1,
              t = null,
              i = null,
              r = null,
              a = null,
              o = null,
              l = null,
              s = null,
              c = null;
            return {
              setTest: function (t) {
                n || (t ? G(e.STENCIL_TEST) : V(e.STENCIL_TEST));
              },
              setMask: function (i) {
                t === i || n || (e.stencilMask(i), (t = i));
              },
              setFunc: function (n, t, o) {
                (i !== n || r !== t || a !== o) &&
                  (e.stencilFunc(n, t, o), (i = n), (r = t), (a = o));
              },
              setOp: function (n, t, i) {
                (o !== n || l !== t || s !== i) &&
                  (e.stencilOp(n, t, i), (o = n), (l = t), (s = i));
              },
              setLocked: function (e) {
                n = e;
              },
              setClear: function (n) {
                c !== n && (e.clearStencil(n), (c = n));
              },
              reset: function () {
                (n = !1),
                  (t = null),
                  (i = null),
                  (r = null),
                  (a = null),
                  (o = null),
                  (l = null),
                  (s = null),
                  (c = null);
              },
            };
          })(),
          o = new WeakMap(),
          l = new WeakMap(),
          s = {},
          c = {},
          d = new WeakMap(),
          u = [],
          f = null,
          p = !1,
          m = null,
          h = null,
          _ = null,
          g = null,
          v = null,
          E = null,
          S = null,
          T = new i.Q1f(0, 0, 0),
          M = 0,
          x = !1,
          R = null,
          A = null,
          b = null,
          C = null,
          L = null,
          P = e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
          U = !1,
          w = e.getParameter(e.VERSION);
        -1 !== w.indexOf("WebGL")
          ? (U = parseFloat(/^WebGL (\d)/.exec(w)[1]) >= 1)
          : -1 !== w.indexOf("OpenGL ES") &&
            (U = parseFloat(/^OpenGL ES (\d)/.exec(w)[1]) >= 2);
        let D = null,
          y = {},
          I = e.getParameter(e.SCISSOR_BOX),
          N = e.getParameter(e.VIEWPORT),
          O = new i.IUQ().fromArray(I),
          F = new i.IUQ().fromArray(N);
        function B(n, t, i, r) {
          let a = new Uint8Array(4),
            o = e.createTexture();
          e.bindTexture(n, o),
            e.texParameteri(n, e.TEXTURE_MIN_FILTER, e.NEAREST),
            e.texParameteri(n, e.TEXTURE_MAG_FILTER, e.NEAREST);
          for (let o = 0; o < i; o++)
            n === e.TEXTURE_3D || n === e.TEXTURE_2D_ARRAY
              ? e.texImage3D(
                  t,
                  0,
                  e.RGBA,
                  1,
                  1,
                  r,
                  0,
                  e.RGBA,
                  e.UNSIGNED_BYTE,
                  a
                )
              : e.texImage2D(
                  t + o,
                  0,
                  e.RGBA,
                  1,
                  1,
                  0,
                  e.RGBA,
                  e.UNSIGNED_BYTE,
                  a
                );
          return o;
        }
        let H = {};
        function G(n) {
          !0 !== s[n] && (e.enable(n), (s[n] = !0));
        }
        function V(n) {
          !1 !== s[n] && (e.disable(n), (s[n] = !1));
        }
        (H[e.TEXTURE_2D] = B(e.TEXTURE_2D, e.TEXTURE_2D, 1)),
          (H[e.TEXTURE_CUBE_MAP] = B(
            e.TEXTURE_CUBE_MAP,
            e.TEXTURE_CUBE_MAP_POSITIVE_X,
            6
          )),
          (H[e.TEXTURE_2D_ARRAY] = B(
            e.TEXTURE_2D_ARRAY,
            e.TEXTURE_2D_ARRAY,
            1,
            1
          )),
          (H[e.TEXTURE_3D] = B(e.TEXTURE_3D, e.TEXTURE_3D, 1, 1)),
          t.setClear(0, 0, 0, 1),
          r.setClear(1),
          a.setClear(0),
          G(e.DEPTH_TEST),
          r.setFunc(i.xSv),
          X(!1),
          Y(i.Vb5),
          G(e.CULL_FACE),
          W(i.XIg);
        let k = {
          [i.gO9]: e.FUNC_ADD,
          [i.FXf]: e.FUNC_SUBTRACT,
          [i.nST]: e.FUNC_REVERSE_SUBTRACT,
        };
        (k[i.znC] = e.MIN), (k[i.$ei] = e.MAX);
        let z = {
          [i.ojh]: e.ZERO,
          [i.qad]: e.ONE,
          [i.f4X]: e.SRC_COLOR,
          [i.ie2]: e.SRC_ALPHA,
          [i.hgQ]: e.SRC_ALPHA_SATURATE,
          [i.wn6]: e.DST_COLOR,
          [i.hdd]: e.DST_ALPHA,
          [i.LiQ]: e.ONE_MINUS_SRC_COLOR,
          [i.OuU]: e.ONE_MINUS_SRC_ALPHA,
          [i.aEY]: e.ONE_MINUS_DST_COLOR,
          [i.Nt7]: e.ONE_MINUS_DST_ALPHA,
          [i.RrE]: e.CONSTANT_COLOR,
          [i.$Yl]: e.ONE_MINUS_CONSTANT_COLOR,
          [i.e0p]: e.CONSTANT_ALPHA,
          [i.ov9]: e.ONE_MINUS_CONSTANT_ALPHA,
        };
        function W(n, t, r, a, o, l, s, c, d, u) {
          if (n === i.XIg) {
            !0 === p && (V(e.BLEND), (p = !1));
            return;
          }
          if ((!1 === p && (G(e.BLEND), (p = !0)), n !== i.bCz)) {
            if (n !== m || u !== x) {
              if (
                ((h !== i.gO9 || v !== i.gO9) &&
                  (e.blendEquation(e.FUNC_ADD), (h = i.gO9), (v = i.gO9)),
                u)
              )
                switch (n) {
                  case i.NTi:
                    e.blendFuncSeparate(
                      e.ONE,
                      e.ONE_MINUS_SRC_ALPHA,
                      e.ONE,
                      e.ONE_MINUS_SRC_ALPHA
                    );
                    break;
                  case i.EZo:
                    e.blendFunc(e.ONE, e.ONE);
                    break;
                  case i.Kwu:
                    e.blendFuncSeparate(
                      e.ZERO,
                      e.ONE_MINUS_SRC_COLOR,
                      e.ZERO,
                      e.ONE
                    );
                    break;
                  case i.EdD:
                    e.blendFuncSeparate(
                      e.ZERO,
                      e.SRC_COLOR,
                      e.ZERO,
                      e.SRC_ALPHA
                    );
                    break;
                  default:
                    console.error("THREE.WebGLState: Invalid blending: ", n);
                }
              else
                switch (n) {
                  case i.NTi:
                    e.blendFuncSeparate(
                      e.SRC_ALPHA,
                      e.ONE_MINUS_SRC_ALPHA,
                      e.ONE,
                      e.ONE_MINUS_SRC_ALPHA
                    );
                    break;
                  case i.EZo:
                    e.blendFunc(e.SRC_ALPHA, e.ONE);
                    break;
                  case i.Kwu:
                    e.blendFuncSeparate(
                      e.ZERO,
                      e.ONE_MINUS_SRC_COLOR,
                      e.ZERO,
                      e.ONE
                    );
                    break;
                  case i.EdD:
                    e.blendFunc(e.ZERO, e.SRC_COLOR);
                    break;
                  default:
                    console.error("THREE.WebGLState: Invalid blending: ", n);
                }
              (_ = null),
                (g = null),
                (E = null),
                (S = null),
                T.set(0, 0, 0),
                (M = 0),
                (m = n),
                (x = u);
            }
            return;
          }
          (o = o || t),
            (l = l || r),
            (s = s || a),
            (t !== h || o !== v) &&
              (e.blendEquationSeparate(k[t], k[o]), (h = t), (v = o)),
            (r !== _ || a !== g || l !== E || s !== S) &&
              (e.blendFuncSeparate(z[r], z[a], z[l], z[s]),
              (_ = r),
              (g = a),
              (E = l),
              (S = s)),
            (!1 === c.equals(T) || d !== M) &&
              (e.blendColor(c.r, c.g, c.b, d), T.copy(c), (M = d)),
            (m = n),
            (x = !1);
        }
        function X(n) {
          R !== n && (n ? e.frontFace(e.CW) : e.frontFace(e.CCW), (R = n));
        }
        function Y(n) {
          n !== i.WNZ
            ? (G(e.CULL_FACE),
              n !== A &&
                (n === i.Vb5
                  ? e.cullFace(e.BACK)
                  : n === i.Jnc
                  ? e.cullFace(e.FRONT)
                  : e.cullFace(e.FRONT_AND_BACK)))
            : V(e.CULL_FACE),
            (A = n);
        }
        function K(n, t, i) {
          n
            ? (G(e.POLYGON_OFFSET_FILL),
              (C !== t || L !== i) && (e.polygonOffset(t, i), (C = t), (L = i)))
            : V(e.POLYGON_OFFSET_FILL);
        }
        return {
          buffers: { color: t, depth: r, stencil: a },
          enable: G,
          disable: V,
          bindFramebuffer: function (n, t) {
            return (
              c[n] !== t &&
              (e.bindFramebuffer(n, t),
              (c[n] = t),
              n === e.DRAW_FRAMEBUFFER && (c[e.FRAMEBUFFER] = t),
              n === e.FRAMEBUFFER && (c[e.DRAW_FRAMEBUFFER] = t),
              !0)
            );
          },
          drawBuffers: function (n, t) {
            let i = u,
              r = !1;
            if (n) {
              void 0 === (i = d.get(t)) && ((i = []), d.set(t, i));
              let a = n.textures;
              if (i.length !== a.length || i[0] !== e.COLOR_ATTACHMENT0) {
                for (let n = 0, t = a.length; n < t; n++)
                  i[n] = e.COLOR_ATTACHMENT0 + n;
                (i.length = a.length), (r = !0);
              }
            } else i[0] !== e.BACK && ((i[0] = e.BACK), (r = !0));
            r && e.drawBuffers(i);
          },
          useProgram: function (n) {
            return f !== n && (e.useProgram(n), (f = n), !0);
          },
          setBlending: W,
          setMaterial: function (n, o) {
            n.side === i.$EB ? V(e.CULL_FACE) : G(e.CULL_FACE);
            let l = n.side === i.hsX;
            o && (l = !l),
              X(l),
              n.blending === i.NTi && !1 === n.transparent
                ? W(i.XIg)
                : W(
                    n.blending,
                    n.blendEquation,
                    n.blendSrc,
                    n.blendDst,
                    n.blendEquationAlpha,
                    n.blendSrcAlpha,
                    n.blendDstAlpha,
                    n.blendColor,
                    n.blendAlpha,
                    n.premultipliedAlpha
                  ),
              r.setFunc(n.depthFunc),
              r.setTest(n.depthTest),
              r.setMask(n.depthWrite),
              t.setMask(n.colorWrite);
            let s = n.stencilWrite;
            a.setTest(s),
              s &&
                (a.setMask(n.stencilWriteMask),
                a.setFunc(n.stencilFunc, n.stencilRef, n.stencilFuncMask),
                a.setOp(n.stencilFail, n.stencilZFail, n.stencilZPass)),
              K(n.polygonOffset, n.polygonOffsetFactor, n.polygonOffsetUnits),
              !0 === n.alphaToCoverage
                ? G(e.SAMPLE_ALPHA_TO_COVERAGE)
                : V(e.SAMPLE_ALPHA_TO_COVERAGE);
          },
          setFlipSided: X,
          setCullFace: Y,
          setLineWidth: function (n) {
            n !== b && (U && e.lineWidth(n), (b = n));
          },
          setPolygonOffset: K,
          setScissorTest: function (n) {
            n ? G(e.SCISSOR_TEST) : V(e.SCISSOR_TEST);
          },
          activeTexture: function (n) {
            void 0 === n && (n = e.TEXTURE0 + P - 1),
              D !== n && (e.activeTexture(n), (D = n));
          },
          bindTexture: function (n, t, i) {
            void 0 === i && (i = null === D ? e.TEXTURE0 + P - 1 : D);
            let r = y[i];
            void 0 === r &&
              ((r = { type: void 0, texture: void 0 }), (y[i] = r)),
              (r.type !== n || r.texture !== t) &&
                (D !== i && (e.activeTexture(i), (D = i)),
                e.bindTexture(n, t || H[n]),
                (r.type = n),
                (r.texture = t));
          },
          unbindTexture: function () {
            let n = y[D];
            void 0 !== n &&
              void 0 !== n.type &&
              (e.bindTexture(n.type, null),
              (n.type = void 0),
              (n.texture = void 0));
          },
          compressedTexImage2D: function () {
            try {
              e.compressedTexImage2D.apply(e, arguments);
            } catch (e) {
              console.error("THREE.WebGLState:", e);
            }
          },
          compressedTexImage3D: function () {
            try {
              e.compressedTexImage3D.apply(e, arguments);
            } catch (e) {
              console.error("THREE.WebGLState:", e);
            }
          },
          texImage2D: function () {
            try {
              e.texImage2D.apply(e, arguments);
            } catch (e) {
              console.error("THREE.WebGLState:", e);
            }
          },
          texImage3D: function () {
            try {
              e.texImage3D.apply(e, arguments);
            } catch (e) {
              console.error("THREE.WebGLState:", e);
            }
          },
          updateUBOMapping: function (n, t) {
            let i = l.get(t);
            void 0 === i && ((i = new WeakMap()), l.set(t, i));
            let r = i.get(n);
            void 0 === r &&
              ((r = e.getUniformBlockIndex(t, n.name)), i.set(n, r));
          },
          uniformBlockBinding: function (n, t) {
            let i = l.get(t).get(n);
            o.get(t) !== i &&
              (e.uniformBlockBinding(t, i, n.__bindingPointIndex), o.set(t, i));
          },
          texStorage2D: function () {
            try {
              e.texStorage2D.apply(e, arguments);
            } catch (e) {
              console.error("THREE.WebGLState:", e);
            }
          },
          texStorage3D: function () {
            try {
              e.texStorage3D.apply(e, arguments);
            } catch (e) {
              console.error("THREE.WebGLState:", e);
            }
          },
          texSubImage2D: function () {
            try {
              e.texSubImage2D.apply(e, arguments);
            } catch (e) {
              console.error("THREE.WebGLState:", e);
            }
          },
          texSubImage3D: function () {
            try {
              e.texSubImage3D.apply(e, arguments);
            } catch (e) {
              console.error("THREE.WebGLState:", e);
            }
          },
          compressedTexSubImage2D: function () {
            try {
              e.compressedTexSubImage2D.apply(e, arguments);
            } catch (e) {
              console.error("THREE.WebGLState:", e);
            }
          },
          compressedTexSubImage3D: function () {
            try {
              e.compressedTexSubImage3D.apply(e, arguments);
            } catch (e) {
              console.error("THREE.WebGLState:", e);
            }
          },
          scissor: function (n) {
            !1 === O.equals(n) && (e.scissor(n.x, n.y, n.z, n.w), O.copy(n));
          },
          viewport: function (n) {
            !1 === F.equals(n) && (e.viewport(n.x, n.y, n.z, n.w), F.copy(n));
          },
          reset: function () {
            e.disable(e.BLEND),
              e.disable(e.CULL_FACE),
              e.disable(e.DEPTH_TEST),
              e.disable(e.POLYGON_OFFSET_FILL),
              e.disable(e.SCISSOR_TEST),
              e.disable(e.STENCIL_TEST),
              e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),
              e.blendEquation(e.FUNC_ADD),
              e.blendFunc(e.ONE, e.ZERO),
              e.blendFuncSeparate(e.ONE, e.ZERO, e.ONE, e.ZERO),
              e.blendColor(0, 0, 0, 0),
              e.colorMask(!0, !0, !0, !0),
              e.clearColor(0, 0, 0, 0),
              e.depthMask(!0),
              e.depthFunc(e.LESS),
              r.setReversed(!1),
              e.clearDepth(1),
              e.stencilMask(0xffffffff),
              e.stencilFunc(e.ALWAYS, 0, 0xffffffff),
              e.stencilOp(e.KEEP, e.KEEP, e.KEEP),
              e.clearStencil(0),
              e.cullFace(e.BACK),
              e.frontFace(e.CCW),
              e.polygonOffset(0, 0),
              e.activeTexture(e.TEXTURE0),
              e.bindFramebuffer(e.FRAMEBUFFER, null),
              e.bindFramebuffer(e.DRAW_FRAMEBUFFER, null),
              e.bindFramebuffer(e.READ_FRAMEBUFFER, null),
              e.useProgram(null),
              e.lineWidth(1),
              e.scissor(0, 0, e.canvas.width, e.canvas.height),
              e.viewport(0, 0, e.canvas.width, e.canvas.height),
              (s = {}),
              (D = null),
              (y = {}),
              (c = {}),
              (d = new WeakMap()),
              (u = []),
              (f = null),
              (p = !1),
              (m = null),
              (h = null),
              (_ = null),
              (g = null),
              (v = null),
              (E = null),
              (S = null),
              (T = new i.Q1f(0, 0, 0)),
              (M = 0),
              (x = !1),
              (R = null),
              (A = null),
              (b = null),
              (C = null),
              (L = null),
              O.set(0, 0, e.canvas.width, e.canvas.height),
              F.set(0, 0, e.canvas.width, e.canvas.height),
              t.reset(),
              r.reset(),
              a.reset();
          },
        };
      }
      function n_(e, n, t, r, a, o, l) {
        let s;
        let c = n.has("WEBGL_multisampled_render_to_texture")
            ? n.get("WEBGL_multisampled_render_to_texture")
            : null,
          d =
            "undefined" != typeof navigator &&
            /OculusBrowser/g.test(navigator.userAgent),
          u = new i.I9Y(),
          f = new WeakMap(),
          p = new WeakMap(),
          m = !1;
        try {
          m =
            "undefined" != typeof OffscreenCanvas &&
            null !== new OffscreenCanvas(1, 1).getContext("2d");
        } catch (e) {}
        function h(e, n) {
          return m ? new OffscreenCanvas(e, n) : (0, i.qq$)("canvas");
        }
        function _(e, n, t) {
          let i = 1,
            r = V(e);
          if (
            ((r.width > t || r.height > t) &&
              (i = t / Math.max(r.width, r.height)),
            i < 1)
          ) {
            if (
              ("undefined" != typeof HTMLImageElement &&
                e instanceof HTMLImageElement) ||
              ("undefined" != typeof HTMLCanvasElement &&
                e instanceof HTMLCanvasElement) ||
              ("undefined" != typeof ImageBitmap && e instanceof ImageBitmap) ||
              ("undefined" != typeof VideoFrame && e instanceof VideoFrame)
            ) {
              let t = Math.floor(i * r.width),
                a = Math.floor(i * r.height);
              void 0 === s && (s = h(t, a));
              let o = n ? h(t, a) : s;
              return (
                (o.width = t),
                (o.height = a),
                o.getContext("2d").drawImage(e, 0, 0, t, a),
                console.warn(
                  "THREE.WebGLRenderer: Texture has been resized from (" +
                    r.width +
                    "x" +
                    r.height +
                    ") to (" +
                    t +
                    "x" +
                    a +
                    ")."
                ),
                o
              );
            }
            "data" in e &&
              console.warn(
                "THREE.WebGLRenderer: Image in DataTexture is too big (" +
                  r.width +
                  "x" +
                  r.height +
                  ")."
              );
          }
          return e;
        }
        function g(e) {
          return e.generateMipmaps;
        }
        function v(n) {
          e.generateMipmap(n);
        }
        function E(t, r, a, o, l = !1) {
          if (null !== t) {
            if (void 0 !== e[t]) return e[t];
            console.warn(
              "THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" +
                t +
                "'"
            );
          }
          let s = r;
          if (
            (r === e.RED &&
              (a === e.FLOAT && (s = e.R32F),
              a === e.HALF_FLOAT && (s = e.R16F),
              a === e.UNSIGNED_BYTE && (s = e.R8)),
            r === e.RED_INTEGER &&
              (a === e.UNSIGNED_BYTE && (s = e.R8UI),
              a === e.UNSIGNED_SHORT && (s = e.R16UI),
              a === e.UNSIGNED_INT && (s = e.R32UI),
              a === e.BYTE && (s = e.R8I),
              a === e.SHORT && (s = e.R16I),
              a === e.INT && (s = e.R32I)),
            r === e.RG &&
              (a === e.FLOAT && (s = e.RG32F),
              a === e.HALF_FLOAT && (s = e.RG16F),
              a === e.UNSIGNED_BYTE && (s = e.RG8)),
            r === e.RG_INTEGER &&
              (a === e.UNSIGNED_BYTE && (s = e.RG8UI),
              a === e.UNSIGNED_SHORT && (s = e.RG16UI),
              a === e.UNSIGNED_INT && (s = e.RG32UI),
              a === e.BYTE && (s = e.RG8I),
              a === e.SHORT && (s = e.RG16I),
              a === e.INT && (s = e.RG32I)),
            r === e.RGB_INTEGER &&
              (a === e.UNSIGNED_BYTE && (s = e.RGB8UI),
              a === e.UNSIGNED_SHORT && (s = e.RGB16UI),
              a === e.UNSIGNED_INT && (s = e.RGB32UI),
              a === e.BYTE && (s = e.RGB8I),
              a === e.SHORT && (s = e.RGB16I),
              a === e.INT && (s = e.RGB32I)),
            r === e.RGBA_INTEGER &&
              (a === e.UNSIGNED_BYTE && (s = e.RGBA8UI),
              a === e.UNSIGNED_SHORT && (s = e.RGBA16UI),
              a === e.UNSIGNED_INT && (s = e.RGBA32UI),
              a === e.BYTE && (s = e.RGBA8I),
              a === e.SHORT && (s = e.RGBA16I),
              a === e.INT && (s = e.RGBA32I)),
            r === e.RGB && a === e.UNSIGNED_INT_5_9_9_9_REV && (s = e.RGB9_E5),
            r === e.RGBA)
          ) {
            let n = l ? i.VxR : i.ppV.getTransfer(o);
            a === e.FLOAT && (s = e.RGBA32F),
              a === e.HALF_FLOAT && (s = e.RGBA16F),
              a === e.UNSIGNED_BYTE &&
                (s = n === i.KLL ? e.SRGB8_ALPHA8 : e.RGBA8),
              a === e.UNSIGNED_SHORT_4_4_4_4 && (s = e.RGBA4),
              a === e.UNSIGNED_SHORT_5_5_5_1 && (s = e.RGB5_A1);
          }
          return (
            (s === e.R16F ||
              s === e.R32F ||
              s === e.RG16F ||
              s === e.RG32F ||
              s === e.RGBA16F ||
              s === e.RGBA32F) &&
              n.get("EXT_color_buffer_float"),
            s
          );
        }
        function S(n, t) {
          let r;
          return (
            n
              ? null === t || t === i.bkx || t === i.V3x
                ? (r = e.DEPTH24_STENCIL8)
                : t === i.RQf
                ? (r = e.DEPTH32F_STENCIL8)
                : t === i.cHt &&
                  ((r = e.DEPTH24_STENCIL8),
                  console.warn(
                    "DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment."
                  ))
              : null === t || t === i.bkx || t === i.V3x
              ? (r = e.DEPTH_COMPONENT24)
              : t === i.RQf
              ? (r = e.DEPTH_COMPONENT32F)
              : t === i.cHt && (r = e.DEPTH_COMPONENT16),
            r
          );
        }
        function T(e, n) {
          return !0 === g(e) ||
            (e.isFramebufferTexture &&
              e.minFilter !== i.hxR &&
              e.minFilter !== i.k6q)
            ? Math.log2(Math.max(n.width, n.height)) + 1
            : void 0 !== e.mipmaps && e.mipmaps.length > 0
            ? e.mipmaps.length
            : e.isCompressedTexture && Array.isArray(e.image)
            ? n.mipmaps.length
            : 1;
        }
        function M(e) {
          let n = e.target;
          n.removeEventListener("dispose", M),
            (function (e) {
              let n = r.get(e);
              if (void 0 === n.__webglInit) return;
              let t = e.source,
                i = p.get(t);
              if (i) {
                let r = i[n.__cacheKey];
                r.usedTimes--,
                  0 === r.usedTimes && R(e),
                  0 === Object.keys(i).length && p.delete(t);
              }
              r.remove(e);
            })(n),
            n.isVideoTexture && f.delete(n);
        }
        function x(n) {
          let t = n.target;
          t.removeEventListener("dispose", x),
            (function (n) {
              let t = r.get(n);
              if (
                (n.depthTexture &&
                  (n.depthTexture.dispose(), r.remove(n.depthTexture)),
                n.isWebGLCubeRenderTarget)
              )
                for (let n = 0; n < 6; n++) {
                  if (Array.isArray(t.__webglFramebuffer[n]))
                    for (let i = 0; i < t.__webglFramebuffer[n].length; i++)
                      e.deleteFramebuffer(t.__webglFramebuffer[n][i]);
                  else e.deleteFramebuffer(t.__webglFramebuffer[n]);
                  t.__webglDepthbuffer &&
                    e.deleteRenderbuffer(t.__webglDepthbuffer[n]);
                }
              else {
                if (Array.isArray(t.__webglFramebuffer))
                  for (let n = 0; n < t.__webglFramebuffer.length; n++)
                    e.deleteFramebuffer(t.__webglFramebuffer[n]);
                else e.deleteFramebuffer(t.__webglFramebuffer);
                if (
                  (t.__webglDepthbuffer &&
                    e.deleteRenderbuffer(t.__webglDepthbuffer),
                  t.__webglMultisampledFramebuffer &&
                    e.deleteFramebuffer(t.__webglMultisampledFramebuffer),
                  t.__webglColorRenderbuffer)
                )
                  for (let n = 0; n < t.__webglColorRenderbuffer.length; n++)
                    t.__webglColorRenderbuffer[n] &&
                      e.deleteRenderbuffer(t.__webglColorRenderbuffer[n]);
                t.__webglDepthRenderbuffer &&
                  e.deleteRenderbuffer(t.__webglDepthRenderbuffer);
              }
              let i = n.textures;
              for (let n = 0, t = i.length; n < t; n++) {
                let t = r.get(i[n]);
                t.__webglTexture &&
                  (e.deleteTexture(t.__webglTexture), l.memory.textures--),
                  r.remove(i[n]);
              }
              r.remove(n);
            })(t);
        }
        function R(n) {
          let t = r.get(n);
          e.deleteTexture(t.__webglTexture);
          let i = n.source,
            a = p.get(i);
          delete a[t.__cacheKey], l.memory.textures--;
        }
        let A = 0;
        function b(n, i) {
          let a = r.get(n);
          if (
            (n.isVideoTexture &&
              (function (e) {
                let n = l.render.frame;
                f.get(e) !== n && (f.set(e, n), e.update());
              })(n),
            !1 === n.isRenderTargetTexture &&
              n.version > 0 &&
              a.__version !== n.version)
          ) {
            let e = n.image;
            if (null === e)
              console.warn(
                "THREE.WebGLRenderer: Texture marked for update but no image data found."
              );
            else if (!1 === e.complete)
              console.warn(
                "THREE.WebGLRenderer: Texture marked for update but image is incomplete"
              );
            else {
              D(a, n, i);
              return;
            }
          }
          t.bindTexture(e.TEXTURE_2D, a.__webglTexture, e.TEXTURE0 + i);
        }
        let C = {
            [i.GJx]: e.REPEAT,
            [i.ghU]: e.CLAMP_TO_EDGE,
            [i.kTW]: e.MIRRORED_REPEAT,
          },
          L = {
            [i.hxR]: e.NEAREST,
            [i.pHI]: e.NEAREST_MIPMAP_NEAREST,
            [i.Cfg]: e.NEAREST_MIPMAP_LINEAR,
            [i.k6q]: e.LINEAR,
            [i.kRr]: e.LINEAR_MIPMAP_NEAREST,
            [i.$_I]: e.LINEAR_MIPMAP_LINEAR,
          },
          P = {
            [i.amv]: e.NEVER,
            [i.FFZ]: e.ALWAYS,
            [i.vim]: e.LESS,
            [i.TiK]: e.LEQUAL,
            [i.kO0]: e.EQUAL,
            [i.gWB]: e.GEQUAL,
            [i.eoi]: e.GREATER,
            [i.jzd]: e.NOTEQUAL,
          };
        function U(t, o) {
          if (
            (o.type === i.RQf &&
              !1 === n.has("OES_texture_float_linear") &&
              (o.magFilter === i.k6q ||
                o.magFilter === i.kRr ||
                o.magFilter === i.Cfg ||
                o.magFilter === i.$_I ||
                o.minFilter === i.k6q ||
                o.minFilter === i.kRr ||
                o.minFilter === i.Cfg ||
                o.minFilter === i.$_I) &&
              console.warn(
                "THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."
              ),
            e.texParameteri(t, e.TEXTURE_WRAP_S, C[o.wrapS]),
            e.texParameteri(t, e.TEXTURE_WRAP_T, C[o.wrapT]),
            (t === e.TEXTURE_3D || t === e.TEXTURE_2D_ARRAY) &&
              e.texParameteri(t, e.TEXTURE_WRAP_R, C[o.wrapR]),
            e.texParameteri(t, e.TEXTURE_MAG_FILTER, L[o.magFilter]),
            e.texParameteri(t, e.TEXTURE_MIN_FILTER, L[o.minFilter]),
            o.compareFunction &&
              (e.texParameteri(
                t,
                e.TEXTURE_COMPARE_MODE,
                e.COMPARE_REF_TO_TEXTURE
              ),
              e.texParameteri(t, e.TEXTURE_COMPARE_FUNC, P[o.compareFunction])),
            !0 === n.has("EXT_texture_filter_anisotropic") &&
              o.magFilter !== i.hxR &&
              (o.minFilter === i.Cfg || o.minFilter === i.$_I) &&
              (o.type !== i.RQf || !1 !== n.has("OES_texture_float_linear")) &&
              (o.anisotropy > 1 || r.get(o).__currentAnisotropy))
          ) {
            let i = n.get("EXT_texture_filter_anisotropic");
            e.texParameterf(
              t,
              i.TEXTURE_MAX_ANISOTROPY_EXT,
              Math.min(o.anisotropy, a.getMaxAnisotropy())
            ),
              (r.get(o).__currentAnisotropy = o.anisotropy);
          }
        }
        function w(n, t) {
          let i = !1;
          void 0 === n.__webglInit &&
            ((n.__webglInit = !0), t.addEventListener("dispose", M));
          let r = t.source,
            a = p.get(r);
          void 0 === a && ((a = {}), p.set(r, a));
          let o = (function (e) {
            let n = [];
            return (
              n.push(e.wrapS),
              n.push(e.wrapT),
              n.push(e.wrapR || 0),
              n.push(e.magFilter),
              n.push(e.minFilter),
              n.push(e.anisotropy),
              n.push(e.internalFormat),
              n.push(e.format),
              n.push(e.type),
              n.push(e.generateMipmaps),
              n.push(e.premultiplyAlpha),
              n.push(e.flipY),
              n.push(e.unpackAlignment),
              n.push(e.colorSpace),
              n.join()
            );
          })(t);
          if (o !== n.__cacheKey) {
            void 0 === a[o] &&
              ((a[o] = { texture: e.createTexture(), usedTimes: 0 }),
              l.memory.textures++,
              (i = !0)),
              a[o].usedTimes++;
            let r = a[n.__cacheKey];
            void 0 !== r &&
              (a[n.__cacheKey].usedTimes--, 0 === r.usedTimes && R(t)),
              (n.__cacheKey = o),
              (n.__webglTexture = a[o].texture);
          }
          return i;
        }
        function D(n, l, s) {
          let c = e.TEXTURE_2D;
          (l.isDataArrayTexture || l.isCompressedArrayTexture) &&
            (c = e.TEXTURE_2D_ARRAY),
            l.isData3DTexture && (c = e.TEXTURE_3D);
          let d = w(n, l),
            u = l.source;
          t.bindTexture(c, n.__webglTexture, e.TEXTURE0 + s);
          let f = r.get(u);
          if (u.version !== f.__version || !0 === d) {
            let n;
            t.activeTexture(e.TEXTURE0 + s);
            let r = i.ppV.getPrimaries(i.ppV.workingColorSpace),
              p =
                l.colorSpace === i.jf0
                  ? null
                  : i.ppV.getPrimaries(l.colorSpace),
              m =
                l.colorSpace === i.jf0 || r === p
                  ? e.NONE
                  : e.BROWSER_DEFAULT_WEBGL;
            e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, l.flipY),
              e.pixelStorei(
                e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
                l.premultiplyAlpha
              ),
              e.pixelStorei(e.UNPACK_ALIGNMENT, l.unpackAlignment),
              e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, m);
            let h = _(l.image, !1, a.maxTextureSize);
            h = G(l, h);
            let M = o.convert(l.format, l.colorSpace),
              x = o.convert(l.type),
              R = E(l.internalFormat, M, x, l.colorSpace, l.isVideoTexture);
            U(c, l);
            let A = l.mipmaps,
              b = !0 !== l.isVideoTexture,
              C = void 0 === f.__version || !0 === d,
              L = u.dataReady,
              P = T(l, h);
            if (l.isDepthTexture)
              (R = S(l.format === i.dcC, l.type)),
                C &&
                  (b
                    ? t.texStorage2D(e.TEXTURE_2D, 1, R, h.width, h.height)
                    : t.texImage2D(
                        e.TEXTURE_2D,
                        0,
                        R,
                        h.width,
                        h.height,
                        0,
                        M,
                        x,
                        null
                      ));
            else if (l.isDataTexture) {
              if (A.length > 0) {
                b &&
                  C &&
                  t.texStorage2D(e.TEXTURE_2D, P, R, A[0].width, A[0].height);
                for (let i = 0, r = A.length; i < r; i++)
                  (n = A[i]),
                    b
                      ? L &&
                        t.texSubImage2D(
                          e.TEXTURE_2D,
                          i,
                          0,
                          0,
                          n.width,
                          n.height,
                          M,
                          x,
                          n.data
                        )
                      : t.texImage2D(
                          e.TEXTURE_2D,
                          i,
                          R,
                          n.width,
                          n.height,
                          0,
                          M,
                          x,
                          n.data
                        );
                l.generateMipmaps = !1;
              } else
                b
                  ? (C && t.texStorage2D(e.TEXTURE_2D, P, R, h.width, h.height),
                    L &&
                      t.texSubImage2D(
                        e.TEXTURE_2D,
                        0,
                        0,
                        0,
                        h.width,
                        h.height,
                        M,
                        x,
                        h.data
                      ))
                  : t.texImage2D(
                      e.TEXTURE_2D,
                      0,
                      R,
                      h.width,
                      h.height,
                      0,
                      M,
                      x,
                      h.data
                    );
            } else if (l.isCompressedTexture) {
              if (l.isCompressedArrayTexture) {
                b &&
                  C &&
                  t.texStorage3D(
                    e.TEXTURE_2D_ARRAY,
                    P,
                    R,
                    A[0].width,
                    A[0].height,
                    h.depth
                  );
                for (let r = 0, a = A.length; r < a; r++)
                  if (((n = A[r]), l.format !== i.GWd)) {
                    if (null !== M) {
                      if (b) {
                        if (L) {
                          if (l.layerUpdates.size > 0) {
                            let a = (0, i.Nex)(
                              n.width,
                              n.height,
                              l.format,
                              l.type
                            );
                            for (let i of l.layerUpdates) {
                              let o = n.data.subarray(
                                (i * a) / n.data.BYTES_PER_ELEMENT,
                                ((i + 1) * a) / n.data.BYTES_PER_ELEMENT
                              );
                              t.compressedTexSubImage3D(
                                e.TEXTURE_2D_ARRAY,
                                r,
                                0,
                                0,
                                i,
                                n.width,
                                n.height,
                                1,
                                M,
                                o
                              );
                            }
                            l.clearLayerUpdates();
                          } else
                            t.compressedTexSubImage3D(
                              e.TEXTURE_2D_ARRAY,
                              r,
                              0,
                              0,
                              0,
                              n.width,
                              n.height,
                              h.depth,
                              M,
                              n.data
                            );
                        }
                      } else
                        t.compressedTexImage3D(
                          e.TEXTURE_2D_ARRAY,
                          r,
                          R,
                          n.width,
                          n.height,
                          h.depth,
                          0,
                          n.data,
                          0,
                          0
                        );
                    } else
                      console.warn(
                        "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                      );
                  } else
                    b
                      ? L &&
                        t.texSubImage3D(
                          e.TEXTURE_2D_ARRAY,
                          r,
                          0,
                          0,
                          0,
                          n.width,
                          n.height,
                          h.depth,
                          M,
                          x,
                          n.data
                        )
                      : t.texImage3D(
                          e.TEXTURE_2D_ARRAY,
                          r,
                          R,
                          n.width,
                          n.height,
                          h.depth,
                          0,
                          M,
                          x,
                          n.data
                        );
              } else {
                b &&
                  C &&
                  t.texStorage2D(e.TEXTURE_2D, P, R, A[0].width, A[0].height);
                for (let r = 0, a = A.length; r < a; r++)
                  (n = A[r]),
                    l.format !== i.GWd
                      ? null !== M
                        ? b
                          ? L &&
                            t.compressedTexSubImage2D(
                              e.TEXTURE_2D,
                              r,
                              0,
                              0,
                              n.width,
                              n.height,
                              M,
                              n.data
                            )
                          : t.compressedTexImage2D(
                              e.TEXTURE_2D,
                              r,
                              R,
                              n.width,
                              n.height,
                              0,
                              n.data
                            )
                        : console.warn(
                            "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                          )
                      : b
                      ? L &&
                        t.texSubImage2D(
                          e.TEXTURE_2D,
                          r,
                          0,
                          0,
                          n.width,
                          n.height,
                          M,
                          x,
                          n.data
                        )
                      : t.texImage2D(
                          e.TEXTURE_2D,
                          r,
                          R,
                          n.width,
                          n.height,
                          0,
                          M,
                          x,
                          n.data
                        );
              }
            } else if (l.isDataArrayTexture) {
              if (b) {
                if (
                  (C &&
                    t.texStorage3D(
                      e.TEXTURE_2D_ARRAY,
                      P,
                      R,
                      h.width,
                      h.height,
                      h.depth
                    ),
                  L)
                ) {
                  if (l.layerUpdates.size > 0) {
                    let n = (0, i.Nex)(h.width, h.height, l.format, l.type);
                    for (let i of l.layerUpdates) {
                      let r = h.data.subarray(
                        (i * n) / h.data.BYTES_PER_ELEMENT,
                        ((i + 1) * n) / h.data.BYTES_PER_ELEMENT
                      );
                      t.texSubImage3D(
                        e.TEXTURE_2D_ARRAY,
                        0,
                        0,
                        0,
                        i,
                        h.width,
                        h.height,
                        1,
                        M,
                        x,
                        r
                      );
                    }
                    l.clearLayerUpdates();
                  } else
                    t.texSubImage3D(
                      e.TEXTURE_2D_ARRAY,
                      0,
                      0,
                      0,
                      0,
                      h.width,
                      h.height,
                      h.depth,
                      M,
                      x,
                      h.data
                    );
                }
              } else
                t.texImage3D(
                  e.TEXTURE_2D_ARRAY,
                  0,
                  R,
                  h.width,
                  h.height,
                  h.depth,
                  0,
                  M,
                  x,
                  h.data
                );
            } else if (l.isData3DTexture)
              b
                ? (C &&
                    t.texStorage3D(
                      e.TEXTURE_3D,
                      P,
                      R,
                      h.width,
                      h.height,
                      h.depth
                    ),
                  L &&
                    t.texSubImage3D(
                      e.TEXTURE_3D,
                      0,
                      0,
                      0,
                      0,
                      h.width,
                      h.height,
                      h.depth,
                      M,
                      x,
                      h.data
                    ))
                : t.texImage3D(
                    e.TEXTURE_3D,
                    0,
                    R,
                    h.width,
                    h.height,
                    h.depth,
                    0,
                    M,
                    x,
                    h.data
                  );
            else if (l.isFramebufferTexture) {
              if (C) {
                if (b) t.texStorage2D(e.TEXTURE_2D, P, R, h.width, h.height);
                else {
                  let n = h.width,
                    i = h.height;
                  for (let r = 0; r < P; r++)
                    t.texImage2D(e.TEXTURE_2D, r, R, n, i, 0, M, x, null),
                      (n >>= 1),
                      (i >>= 1);
                }
              }
            } else if (A.length > 0) {
              if (b && C) {
                let n = V(A[0]);
                t.texStorage2D(e.TEXTURE_2D, P, R, n.width, n.height);
              }
              for (let i = 0, r = A.length; i < r; i++)
                (n = A[i]),
                  b
                    ? L && t.texSubImage2D(e.TEXTURE_2D, i, 0, 0, M, x, n)
                    : t.texImage2D(e.TEXTURE_2D, i, R, M, x, n);
              l.generateMipmaps = !1;
            } else if (b) {
              if (C) {
                let n = V(h);
                t.texStorage2D(e.TEXTURE_2D, P, R, n.width, n.height);
              }
              L && t.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, M, x, h);
            } else t.texImage2D(e.TEXTURE_2D, 0, R, M, x, h);
            g(l) && v(c),
              (f.__version = u.version),
              l.onUpdate && l.onUpdate(l);
          }
          n.__version = l.version;
        }
        function y(n, i, a, l, s, d) {
          let u = o.convert(a.format, a.colorSpace),
            f = o.convert(a.type),
            p = E(a.internalFormat, u, f, a.colorSpace),
            m = r.get(i),
            h = r.get(a);
          if (((h.__renderTarget = i), !m.__hasExternalTextures)) {
            let n = Math.max(1, i.width >> d),
              r = Math.max(1, i.height >> d);
            s === e.TEXTURE_3D || s === e.TEXTURE_2D_ARRAY
              ? t.texImage3D(s, d, p, n, r, i.depth, 0, u, f, null)
              : t.texImage2D(s, d, p, n, r, 0, u, f, null);
          }
          t.bindFramebuffer(e.FRAMEBUFFER, n),
            H(i)
              ? c.framebufferTexture2DMultisampleEXT(
                  e.FRAMEBUFFER,
                  l,
                  s,
                  h.__webglTexture,
                  0,
                  B(i)
                )
              : (s === e.TEXTURE_2D ||
                  (s >= e.TEXTURE_CUBE_MAP_POSITIVE_X &&
                    s <= e.TEXTURE_CUBE_MAP_NEGATIVE_Z)) &&
                e.framebufferTexture2D(
                  e.FRAMEBUFFER,
                  l,
                  s,
                  h.__webglTexture,
                  d
                ),
            t.bindFramebuffer(e.FRAMEBUFFER, null);
        }
        function I(n, t, i) {
          if ((e.bindRenderbuffer(e.RENDERBUFFER, n), t.depthBuffer)) {
            let r = t.depthTexture,
              a = r && r.isDepthTexture ? r.type : null,
              o = S(t.stencilBuffer, a),
              l = t.stencilBuffer
                ? e.DEPTH_STENCIL_ATTACHMENT
                : e.DEPTH_ATTACHMENT,
              s = B(t);
            H(t)
              ? c.renderbufferStorageMultisampleEXT(
                  e.RENDERBUFFER,
                  s,
                  o,
                  t.width,
                  t.height
                )
              : i
              ? e.renderbufferStorageMultisample(
                  e.RENDERBUFFER,
                  s,
                  o,
                  t.width,
                  t.height
                )
              : e.renderbufferStorage(e.RENDERBUFFER, o, t.width, t.height),
              e.framebufferRenderbuffer(e.FRAMEBUFFER, l, e.RENDERBUFFER, n);
          } else {
            let n = t.textures;
            for (let r = 0; r < n.length; r++) {
              let a = n[r],
                l = o.convert(a.format, a.colorSpace),
                s = o.convert(a.type),
                d = E(a.internalFormat, l, s, a.colorSpace),
                u = B(t);
              i && !1 === H(t)
                ? e.renderbufferStorageMultisample(
                    e.RENDERBUFFER,
                    u,
                    d,
                    t.width,
                    t.height
                  )
                : H(t)
                ? c.renderbufferStorageMultisampleEXT(
                    e.RENDERBUFFER,
                    u,
                    d,
                    t.width,
                    t.height
                  )
                : e.renderbufferStorage(e.RENDERBUFFER, d, t.width, t.height);
            }
          }
          e.bindRenderbuffer(e.RENDERBUFFER, null);
        }
        function N(n) {
          let a = r.get(n),
            o = !0 === n.isWebGLCubeRenderTarget;
          if (a.__boundDepthTexture !== n.depthTexture) {
            let e = n.depthTexture;
            if ((a.__depthDisposeCallback && a.__depthDisposeCallback(), e)) {
              let n = () => {
                delete a.__boundDepthTexture,
                  delete a.__depthDisposeCallback,
                  e.removeEventListener("dispose", n);
              };
              e.addEventListener("dispose", n), (a.__depthDisposeCallback = n);
            }
            a.__boundDepthTexture = e;
          }
          if (n.depthTexture && !a.__autoAllocateDepthBuffer) {
            if (o)
              throw Error(
                "target.depthTexture not supported in Cube render targets"
              );
            !(function (n, a) {
              if (a && a.isWebGLCubeRenderTarget)
                throw Error(
                  "Depth Texture with cube render targets is not supported"
                );
              if (
                (t.bindFramebuffer(e.FRAMEBUFFER, n),
                !(a.depthTexture && a.depthTexture.isDepthTexture))
              )
                throw Error(
                  "renderTarget.depthTexture must be an instance of THREE.DepthTexture"
                );
              let o = r.get(a.depthTexture);
              (o.__renderTarget = a),
                (o.__webglTexture &&
                  a.depthTexture.image.width === a.width &&
                  a.depthTexture.image.height === a.height) ||
                  ((a.depthTexture.image.width = a.width),
                  (a.depthTexture.image.height = a.height),
                  (a.depthTexture.needsUpdate = !0)),
                b(a.depthTexture, 0);
              let l = o.__webglTexture,
                s = B(a);
              if (a.depthTexture.format === i.zdS)
                H(a)
                  ? c.framebufferTexture2DMultisampleEXT(
                      e.FRAMEBUFFER,
                      e.DEPTH_ATTACHMENT,
                      e.TEXTURE_2D,
                      l,
                      0,
                      s
                    )
                  : e.framebufferTexture2D(
                      e.FRAMEBUFFER,
                      e.DEPTH_ATTACHMENT,
                      e.TEXTURE_2D,
                      l,
                      0
                    );
              else if (a.depthTexture.format === i.dcC)
                H(a)
                  ? c.framebufferTexture2DMultisampleEXT(
                      e.FRAMEBUFFER,
                      e.DEPTH_STENCIL_ATTACHMENT,
                      e.TEXTURE_2D,
                      l,
                      0,
                      s
                    )
                  : e.framebufferTexture2D(
                      e.FRAMEBUFFER,
                      e.DEPTH_STENCIL_ATTACHMENT,
                      e.TEXTURE_2D,
                      l,
                      0
                    );
              else throw Error("Unknown depthTexture format");
            })(a.__webglFramebuffer, n);
          } else if (o) {
            a.__webglDepthbuffer = [];
            for (let i = 0; i < 6; i++)
              if (
                (t.bindFramebuffer(e.FRAMEBUFFER, a.__webglFramebuffer[i]),
                void 0 === a.__webglDepthbuffer[i])
              )
                (a.__webglDepthbuffer[i] = e.createRenderbuffer()),
                  I(a.__webglDepthbuffer[i], n, !1);
              else {
                let t = n.stencilBuffer
                    ? e.DEPTH_STENCIL_ATTACHMENT
                    : e.DEPTH_ATTACHMENT,
                  r = a.__webglDepthbuffer[i];
                e.bindRenderbuffer(e.RENDERBUFFER, r),
                  e.framebufferRenderbuffer(
                    e.FRAMEBUFFER,
                    t,
                    e.RENDERBUFFER,
                    r
                  );
              }
          } else if (
            (t.bindFramebuffer(e.FRAMEBUFFER, a.__webglFramebuffer),
            void 0 === a.__webglDepthbuffer)
          )
            (a.__webglDepthbuffer = e.createRenderbuffer()),
              I(a.__webglDepthbuffer, n, !1);
          else {
            let t = n.stencilBuffer
                ? e.DEPTH_STENCIL_ATTACHMENT
                : e.DEPTH_ATTACHMENT,
              i = a.__webglDepthbuffer;
            e.bindRenderbuffer(e.RENDERBUFFER, i),
              e.framebufferRenderbuffer(e.FRAMEBUFFER, t, e.RENDERBUFFER, i);
          }
          t.bindFramebuffer(e.FRAMEBUFFER, null);
        }
        let O = [],
          F = [];
        function B(e) {
          return Math.min(a.maxSamples, e.samples);
        }
        function H(e) {
          let t = r.get(e);
          return (
            e.samples > 0 &&
            !0 === n.has("WEBGL_multisampled_render_to_texture") &&
            !1 !== t.__useRenderToTexture
          );
        }
        function G(e, n) {
          let t = e.colorSpace,
            r = e.format,
            a = e.type;
          return (
            !0 === e.isCompressedTexture ||
              !0 === e.isVideoTexture ||
              (t !== i.Zr2 &&
                t !== i.jf0 &&
                (i.ppV.getTransfer(t) === i.KLL
                  ? (r !== i.GWd || a !== i.OUM) &&
                    console.warn(
                      "THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."
                    )
                  : console.error(
                      "THREE.WebGLTextures: Unsupported texture color space:",
                      t
                    ))),
            n
          );
        }
        function V(e) {
          return (
            "undefined" != typeof HTMLImageElement &&
            e instanceof HTMLImageElement
              ? ((u.width = e.naturalWidth || e.width),
                (u.height = e.naturalHeight || e.height))
              : "undefined" != typeof VideoFrame && e instanceof VideoFrame
              ? ((u.width = e.displayWidth), (u.height = e.displayHeight))
              : ((u.width = e.width), (u.height = e.height)),
            u
          );
        }
        (this.allocateTextureUnit = function () {
          let e = A;
          return (
            e >= a.maxTextures &&
              console.warn(
                "THREE.WebGLTextures: Trying to use " +
                  e +
                  " texture units while this GPU supports only " +
                  a.maxTextures
              ),
            (A += 1),
            e
          );
        }),
          (this.resetTextureUnits = function () {
            A = 0;
          }),
          (this.setTexture2D = b),
          (this.setTexture2DArray = function (n, i) {
            let a = r.get(n);
            if (n.version > 0 && a.__version !== n.version) {
              D(a, n, i);
              return;
            }
            t.bindTexture(e.TEXTURE_2D_ARRAY, a.__webglTexture, e.TEXTURE0 + i);
          }),
          (this.setTexture3D = function (n, i) {
            let a = r.get(n);
            if (n.version > 0 && a.__version !== n.version) {
              D(a, n, i);
              return;
            }
            t.bindTexture(e.TEXTURE_3D, a.__webglTexture, e.TEXTURE0 + i);
          }),
          (this.setTextureCube = function (n, l) {
            let s = r.get(n);
            if (n.version > 0 && s.__version !== n.version) {
              (function (n, l, s) {
                if (6 !== l.image.length) return;
                let c = w(n, l),
                  d = l.source;
                t.bindTexture(
                  e.TEXTURE_CUBE_MAP,
                  n.__webglTexture,
                  e.TEXTURE0 + s
                );
                let u = r.get(d);
                if (d.version !== u.__version || !0 === c) {
                  let n;
                  t.activeTexture(e.TEXTURE0 + s);
                  let r = i.ppV.getPrimaries(i.ppV.workingColorSpace),
                    f =
                      l.colorSpace === i.jf0
                        ? null
                        : i.ppV.getPrimaries(l.colorSpace),
                    p =
                      l.colorSpace === i.jf0 || r === f
                        ? e.NONE
                        : e.BROWSER_DEFAULT_WEBGL;
                  e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, l.flipY),
                    e.pixelStorei(
                      e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
                      l.premultiplyAlpha
                    ),
                    e.pixelStorei(e.UNPACK_ALIGNMENT, l.unpackAlignment),
                    e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, p);
                  let m =
                      l.isCompressedTexture || l.image[0].isCompressedTexture,
                    h = l.image[0] && l.image[0].isDataTexture,
                    S = [];
                  for (let e = 0; e < 6; e++)
                    m || h
                      ? (S[e] = h ? l.image[e].image : l.image[e])
                      : (S[e] = _(l.image[e], !0, a.maxCubemapSize)),
                      (S[e] = G(l, S[e]));
                  let M = S[0],
                    x = o.convert(l.format, l.colorSpace),
                    R = o.convert(l.type),
                    A = E(l.internalFormat, x, R, l.colorSpace),
                    b = !0 !== l.isVideoTexture,
                    C = void 0 === u.__version || !0 === c,
                    L = d.dataReady,
                    P = T(l, M);
                  if ((U(e.TEXTURE_CUBE_MAP, l), m)) {
                    b &&
                      C &&
                      t.texStorage2D(
                        e.TEXTURE_CUBE_MAP,
                        P,
                        A,
                        M.width,
                        M.height
                      );
                    for (let r = 0; r < 6; r++) {
                      n = S[r].mipmaps;
                      for (let a = 0; a < n.length; a++) {
                        let o = n[a];
                        l.format !== i.GWd
                          ? null !== x
                            ? b
                              ? L &&
                                t.compressedTexSubImage2D(
                                  e.TEXTURE_CUBE_MAP_POSITIVE_X + r,
                                  a,
                                  0,
                                  0,
                                  o.width,
                                  o.height,
                                  x,
                                  o.data
                                )
                              : t.compressedTexImage2D(
                                  e.TEXTURE_CUBE_MAP_POSITIVE_X + r,
                                  a,
                                  A,
                                  o.width,
                                  o.height,
                                  0,
                                  o.data
                                )
                            : console.warn(
                                "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"
                              )
                          : b
                          ? L &&
                            t.texSubImage2D(
                              e.TEXTURE_CUBE_MAP_POSITIVE_X + r,
                              a,
                              0,
                              0,
                              o.width,
                              o.height,
                              x,
                              R,
                              o.data
                            )
                          : t.texImage2D(
                              e.TEXTURE_CUBE_MAP_POSITIVE_X + r,
                              a,
                              A,
                              o.width,
                              o.height,
                              0,
                              x,
                              R,
                              o.data
                            );
                      }
                    }
                  } else {
                    if (((n = l.mipmaps), b && C)) {
                      n.length > 0 && P++;
                      let i = V(S[0]);
                      t.texStorage2D(
                        e.TEXTURE_CUBE_MAP,
                        P,
                        A,
                        i.width,
                        i.height
                      );
                    }
                    for (let i = 0; i < 6; i++)
                      if (h) {
                        b
                          ? L &&
                            t.texSubImage2D(
                              e.TEXTURE_CUBE_MAP_POSITIVE_X + i,
                              0,
                              0,
                              0,
                              S[i].width,
                              S[i].height,
                              x,
                              R,
                              S[i].data
                            )
                          : t.texImage2D(
                              e.TEXTURE_CUBE_MAP_POSITIVE_X + i,
                              0,
                              A,
                              S[i].width,
                              S[i].height,
                              0,
                              x,
                              R,
                              S[i].data
                            );
                        for (let r = 0; r < n.length; r++) {
                          let a = n[r].image[i].image;
                          b
                            ? L &&
                              t.texSubImage2D(
                                e.TEXTURE_CUBE_MAP_POSITIVE_X + i,
                                r + 1,
                                0,
                                0,
                                a.width,
                                a.height,
                                x,
                                R,
                                a.data
                              )
                            : t.texImage2D(
                                e.TEXTURE_CUBE_MAP_POSITIVE_X + i,
                                r + 1,
                                A,
                                a.width,
                                a.height,
                                0,
                                x,
                                R,
                                a.data
                              );
                        }
                      } else {
                        b
                          ? L &&
                            t.texSubImage2D(
                              e.TEXTURE_CUBE_MAP_POSITIVE_X + i,
                              0,
                              0,
                              0,
                              x,
                              R,
                              S[i]
                            )
                          : t.texImage2D(
                              e.TEXTURE_CUBE_MAP_POSITIVE_X + i,
                              0,
                              A,
                              x,
                              R,
                              S[i]
                            );
                        for (let r = 0; r < n.length; r++) {
                          let a = n[r];
                          b
                            ? L &&
                              t.texSubImage2D(
                                e.TEXTURE_CUBE_MAP_POSITIVE_X + i,
                                r + 1,
                                0,
                                0,
                                x,
                                R,
                                a.image[i]
                              )
                            : t.texImage2D(
                                e.TEXTURE_CUBE_MAP_POSITIVE_X + i,
                                r + 1,
                                A,
                                x,
                                R,
                                a.image[i]
                              );
                        }
                      }
                  }
                  g(l) && v(e.TEXTURE_CUBE_MAP),
                    (u.__version = d.version),
                    l.onUpdate && l.onUpdate(l);
                }
                n.__version = l.version;
              })(s, n, l);
              return;
            }
            t.bindTexture(e.TEXTURE_CUBE_MAP, s.__webglTexture, e.TEXTURE0 + l);
          }),
          (this.rebindTextures = function (n, t, i) {
            let a = r.get(n);
            void 0 !== t &&
              y(
                a.__webglFramebuffer,
                n,
                n.texture,
                e.COLOR_ATTACHMENT0,
                e.TEXTURE_2D,
                0
              ),
              void 0 !== i && N(n);
          }),
          (this.setupRenderTarget = function (n) {
            let i = n.texture,
              a = r.get(n),
              s = r.get(i);
            n.addEventListener("dispose", x);
            let c = n.textures,
              d = !0 === n.isWebGLCubeRenderTarget,
              u = c.length > 1;
            if (
              (!u &&
                (void 0 === s.__webglTexture &&
                  (s.__webglTexture = e.createTexture()),
                (s.__version = i.version),
                l.memory.textures++),
              d)
            ) {
              a.__webglFramebuffer = [];
              for (let n = 0; n < 6; n++)
                if (i.mipmaps && i.mipmaps.length > 0) {
                  a.__webglFramebuffer[n] = [];
                  for (let t = 0; t < i.mipmaps.length; t++)
                    a.__webglFramebuffer[n][t] = e.createFramebuffer();
                } else a.__webglFramebuffer[n] = e.createFramebuffer();
            } else {
              if (i.mipmaps && i.mipmaps.length > 0) {
                a.__webglFramebuffer = [];
                for (let n = 0; n < i.mipmaps.length; n++)
                  a.__webglFramebuffer[n] = e.createFramebuffer();
              } else a.__webglFramebuffer = e.createFramebuffer();
              if (u)
                for (let n = 0, t = c.length; n < t; n++) {
                  let t = r.get(c[n]);
                  void 0 === t.__webglTexture &&
                    ((t.__webglTexture = e.createTexture()),
                    l.memory.textures++);
                }
              if (n.samples > 0 && !1 === H(n)) {
                (a.__webglMultisampledFramebuffer = e.createFramebuffer()),
                  (a.__webglColorRenderbuffer = []),
                  t.bindFramebuffer(
                    e.FRAMEBUFFER,
                    a.__webglMultisampledFramebuffer
                  );
                for (let t = 0; t < c.length; t++) {
                  let i = c[t];
                  (a.__webglColorRenderbuffer[t] = e.createRenderbuffer()),
                    e.bindRenderbuffer(
                      e.RENDERBUFFER,
                      a.__webglColorRenderbuffer[t]
                    );
                  let r = o.convert(i.format, i.colorSpace),
                    l = o.convert(i.type),
                    s = E(
                      i.internalFormat,
                      r,
                      l,
                      i.colorSpace,
                      !0 === n.isXRRenderTarget
                    ),
                    d = B(n);
                  e.renderbufferStorageMultisample(
                    e.RENDERBUFFER,
                    d,
                    s,
                    n.width,
                    n.height
                  ),
                    e.framebufferRenderbuffer(
                      e.FRAMEBUFFER,
                      e.COLOR_ATTACHMENT0 + t,
                      e.RENDERBUFFER,
                      a.__webglColorRenderbuffer[t]
                    );
                }
                e.bindRenderbuffer(e.RENDERBUFFER, null),
                  n.depthBuffer &&
                    ((a.__webglDepthRenderbuffer = e.createRenderbuffer()),
                    I(a.__webglDepthRenderbuffer, n, !0)),
                  t.bindFramebuffer(e.FRAMEBUFFER, null);
              }
            }
            if (d) {
              t.bindTexture(e.TEXTURE_CUBE_MAP, s.__webglTexture),
                U(e.TEXTURE_CUBE_MAP, i);
              for (let t = 0; t < 6; t++)
                if (i.mipmaps && i.mipmaps.length > 0)
                  for (let r = 0; r < i.mipmaps.length; r++)
                    y(
                      a.__webglFramebuffer[t][r],
                      n,
                      i,
                      e.COLOR_ATTACHMENT0,
                      e.TEXTURE_CUBE_MAP_POSITIVE_X + t,
                      r
                    );
                else
                  y(
                    a.__webglFramebuffer[t],
                    n,
                    i,
                    e.COLOR_ATTACHMENT0,
                    e.TEXTURE_CUBE_MAP_POSITIVE_X + t,
                    0
                  );
              g(i) && v(e.TEXTURE_CUBE_MAP), t.unbindTexture();
            } else if (u) {
              for (let i = 0, o = c.length; i < o; i++) {
                let o = c[i],
                  l = r.get(o);
                t.bindTexture(e.TEXTURE_2D, l.__webglTexture),
                  U(e.TEXTURE_2D, o),
                  y(
                    a.__webglFramebuffer,
                    n,
                    o,
                    e.COLOR_ATTACHMENT0 + i,
                    e.TEXTURE_2D,
                    0
                  ),
                  g(o) && v(e.TEXTURE_2D);
              }
              t.unbindTexture();
            } else {
              let r = e.TEXTURE_2D;
              if (
                ((n.isWebGL3DRenderTarget || n.isWebGLArrayRenderTarget) &&
                  (r = n.isWebGL3DRenderTarget
                    ? e.TEXTURE_3D
                    : e.TEXTURE_2D_ARRAY),
                t.bindTexture(r, s.__webglTexture),
                U(r, i),
                i.mipmaps && i.mipmaps.length > 0)
              )
                for (let t = 0; t < i.mipmaps.length; t++)
                  y(a.__webglFramebuffer[t], n, i, e.COLOR_ATTACHMENT0, r, t);
              else y(a.__webglFramebuffer, n, i, e.COLOR_ATTACHMENT0, r, 0);
              g(i) && v(r), t.unbindTexture();
            }
            n.depthBuffer && N(n);
          }),
          (this.updateRenderTargetMipmap = function (n) {
            let i = n.textures;
            for (let a = 0, o = i.length; a < o; a++) {
              let o = i[a];
              if (g(o)) {
                let i = n.isWebGLCubeRenderTarget
                    ? e.TEXTURE_CUBE_MAP
                    : n.isWebGL3DRenderTarget
                    ? e.TEXTURE_3D
                    : n.isWebGLArrayRenderTarget || n.isCompressedArrayTexture
                    ? e.TEXTURE_2D_ARRAY
                    : e.TEXTURE_2D,
                  a = r.get(o).__webglTexture;
                t.bindTexture(i, a), v(i), t.unbindTexture();
              }
            }
          }),
          (this.updateMultisampleRenderTarget = function (n) {
            if (n.samples > 0) {
              if (!1 === H(n)) {
                let i = n.textures,
                  a = n.width,
                  o = n.height,
                  l = e.COLOR_BUFFER_BIT,
                  s = n.stencilBuffer
                    ? e.DEPTH_STENCIL_ATTACHMENT
                    : e.DEPTH_ATTACHMENT,
                  c = r.get(n),
                  u = i.length > 1;
                if (u)
                  for (let n = 0; n < i.length; n++)
                    t.bindFramebuffer(
                      e.FRAMEBUFFER,
                      c.__webglMultisampledFramebuffer
                    ),
                      e.framebufferRenderbuffer(
                        e.FRAMEBUFFER,
                        e.COLOR_ATTACHMENT0 + n,
                        e.RENDERBUFFER,
                        null
                      ),
                      t.bindFramebuffer(e.FRAMEBUFFER, c.__webglFramebuffer),
                      e.framebufferTexture2D(
                        e.DRAW_FRAMEBUFFER,
                        e.COLOR_ATTACHMENT0 + n,
                        e.TEXTURE_2D,
                        null,
                        0
                      );
                t.bindFramebuffer(
                  e.READ_FRAMEBUFFER,
                  c.__webglMultisampledFramebuffer
                ),
                  t.bindFramebuffer(e.DRAW_FRAMEBUFFER, c.__webglFramebuffer);
                for (let t = 0; t < i.length; t++) {
                  if (
                    (n.resolveDepthBuffer &&
                      (n.depthBuffer && (l |= e.DEPTH_BUFFER_BIT),
                      n.stencilBuffer &&
                        n.resolveStencilBuffer &&
                        (l |= e.STENCIL_BUFFER_BIT)),
                    u)
                  ) {
                    e.framebufferRenderbuffer(
                      e.READ_FRAMEBUFFER,
                      e.COLOR_ATTACHMENT0,
                      e.RENDERBUFFER,
                      c.__webglColorRenderbuffer[t]
                    );
                    let n = r.get(i[t]).__webglTexture;
                    e.framebufferTexture2D(
                      e.DRAW_FRAMEBUFFER,
                      e.COLOR_ATTACHMENT0,
                      e.TEXTURE_2D,
                      n,
                      0
                    );
                  }
                  e.blitFramebuffer(0, 0, a, o, 0, 0, a, o, l, e.NEAREST),
                    !0 === d &&
                      ((O.length = 0),
                      (F.length = 0),
                      O.push(e.COLOR_ATTACHMENT0 + t),
                      n.depthBuffer &&
                        !1 === n.resolveDepthBuffer &&
                        (O.push(s),
                        F.push(s),
                        e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER, F)),
                      e.invalidateFramebuffer(e.READ_FRAMEBUFFER, O));
                }
                if (
                  (t.bindFramebuffer(e.READ_FRAMEBUFFER, null),
                  t.bindFramebuffer(e.DRAW_FRAMEBUFFER, null),
                  u)
                )
                  for (let n = 0; n < i.length; n++) {
                    t.bindFramebuffer(
                      e.FRAMEBUFFER,
                      c.__webglMultisampledFramebuffer
                    ),
                      e.framebufferRenderbuffer(
                        e.FRAMEBUFFER,
                        e.COLOR_ATTACHMENT0 + n,
                        e.RENDERBUFFER,
                        c.__webglColorRenderbuffer[n]
                      );
                    let a = r.get(i[n]).__webglTexture;
                    t.bindFramebuffer(e.FRAMEBUFFER, c.__webglFramebuffer),
                      e.framebufferTexture2D(
                        e.DRAW_FRAMEBUFFER,
                        e.COLOR_ATTACHMENT0 + n,
                        e.TEXTURE_2D,
                        a,
                        0
                      );
                  }
                t.bindFramebuffer(
                  e.DRAW_FRAMEBUFFER,
                  c.__webglMultisampledFramebuffer
                );
              } else if (n.depthBuffer && !1 === n.resolveDepthBuffer && d) {
                let t = n.stencilBuffer
                  ? e.DEPTH_STENCIL_ATTACHMENT
                  : e.DEPTH_ATTACHMENT;
                e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER, [t]);
              }
            }
          }),
          (this.setupDepthRenderbuffer = N),
          (this.setupFrameBufferTexture = y),
          (this.useMultisampledRTT = H);
      }
      function ng(e, n) {
        return {
          convert: function (t, r = i.jf0) {
            let a;
            let o = i.ppV.getTransfer(r);
            if (t === i.OUM) return e.UNSIGNED_BYTE;
            if (t === i.Wew) return e.UNSIGNED_SHORT_4_4_4_4;
            if (t === i.gJ2) return e.UNSIGNED_SHORT_5_5_5_1;
            if (t === i.Dmk) return e.UNSIGNED_INT_5_9_9_9_REV;
            if (t === i.tJf) return e.BYTE;
            if (t === i.fBL) return e.SHORT;
            if (t === i.cHt) return e.UNSIGNED_SHORT;
            if (t === i.Yuy) return e.INT;
            if (t === i.bkx) return e.UNSIGNED_INT;
            if (t === i.RQf) return e.FLOAT;
            if (t === i.ix0) return e.HALF_FLOAT;
            if (t === i.wrO) return e.ALPHA;
            if (t === i.HIg) return e.RGB;
            if (t === i.GWd) return e.RGBA;
            if (t === i.Kzv) return e.LUMINANCE;
            if (t === i.CMB) return e.LUMINANCE_ALPHA;
            if (t === i.zdS) return e.DEPTH_COMPONENT;
            if (t === i.dcC) return e.DEPTH_STENCIL;
            if (t === i.VT0) return e.RED;
            if (t === i.ZQM) return e.RED_INTEGER;
            if (t === i.paN) return e.RG;
            if (t === i.TkQ) return e.RG_INTEGER;
            if (t === i.c90) return e.RGBA_INTEGER;
            if (t === i.IE4 || t === i.Nz6 || t === i.jR7 || t === i.BXX) {
              if (o === i.KLL) {
                if (null === (a = n.get("WEBGL_compressed_texture_s3tc_srgb")))
                  return null;
                if (t === i.IE4) return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;
                if (t === i.Nz6) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
                if (t === i.jR7) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
                if (t === i.BXX) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
              } else {
                if (null === (a = n.get("WEBGL_compressed_texture_s3tc")))
                  return null;
                if (t === i.IE4) return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
                if (t === i.Nz6) return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                if (t === i.jR7) return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                if (t === i.BXX) return a.COMPRESSED_RGBA_S3TC_DXT5_EXT;
              }
            }
            if (t === i.k6Q || t === i.kTp || t === i.HXV || t === i.pBf) {
              if (null === (a = n.get("WEBGL_compressed_texture_pvrtc")))
                return null;
              if (t === i.k6Q) return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
              if (t === i.kTp) return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
              if (t === i.HXV) return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
              if (t === i.pBf) return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
            }
            if (t === i.CVz || t === i.Riy || t === i.KDk) {
              if (null === (a = n.get("WEBGL_compressed_texture_etc")))
                return null;
              if (t === i.CVz || t === i.Riy)
                return o === i.KLL
                  ? a.COMPRESSED_SRGB8_ETC2
                  : a.COMPRESSED_RGB8_ETC2;
              if (t === i.KDk)
                return o === i.KLL
                  ? a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC
                  : a.COMPRESSED_RGBA8_ETC2_EAC;
            }
            if (
              t === i.qa3 ||
              t === i.B_h ||
              t === i.czI ||
              t === i.rSH ||
              t === i.Qrf ||
              t === i.psI ||
              t === i.a5J ||
              t === i._QJ ||
              t === i.uB5 ||
              t === i.lyL ||
              t === i.bC7 ||
              t === i.y3Z ||
              t === i.ojs ||
              t === i.S$4
            ) {
              if (null === (a = n.get("WEBGL_compressed_texture_astc")))
                return null;
              if (t === i.qa3)
                return o === i.KLL
                  ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR
                  : a.COMPRESSED_RGBA_ASTC_4x4_KHR;
              if (t === i.B_h)
                return o === i.KLL
                  ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR
                  : a.COMPRESSED_RGBA_ASTC_5x4_KHR;
              if (t === i.czI)
                return o === i.KLL
                  ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR
                  : a.COMPRESSED_RGBA_ASTC_5x5_KHR;
              if (t === i.rSH)
                return o === i.KLL
                  ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR
                  : a.COMPRESSED_RGBA_ASTC_6x5_KHR;
              if (t === i.Qrf)
                return o === i.KLL
                  ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR
                  : a.COMPRESSED_RGBA_ASTC_6x6_KHR;
              if (t === i.psI)
                return o === i.KLL
                  ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR
                  : a.COMPRESSED_RGBA_ASTC_8x5_KHR;
              if (t === i.a5J)
                return o === i.KLL
                  ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR
                  : a.COMPRESSED_RGBA_ASTC_8x6_KHR;
              if (t === i._QJ)
                return o === i.KLL
                  ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR
                  : a.COMPRESSED_RGBA_ASTC_8x8_KHR;
              if (t === i.uB5)
                return o === i.KLL
                  ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR
                  : a.COMPRESSED_RGBA_ASTC_10x5_KHR;
              if (t === i.lyL)
                return o === i.KLL
                  ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR
                  : a.COMPRESSED_RGBA_ASTC_10x6_KHR;
              if (t === i.bC7)
                return o === i.KLL
                  ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR
                  : a.COMPRESSED_RGBA_ASTC_10x8_KHR;
              if (t === i.y3Z)
                return o === i.KLL
                  ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR
                  : a.COMPRESSED_RGBA_ASTC_10x10_KHR;
              if (t === i.ojs)
                return o === i.KLL
                  ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR
                  : a.COMPRESSED_RGBA_ASTC_12x10_KHR;
              if (t === i.S$4)
                return o === i.KLL
                  ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
                  : a.COMPRESSED_RGBA_ASTC_12x12_KHR;
            }
            if (t === i.Fn || t === i.H23 || t === i.W9U) {
              if (null === (a = n.get("EXT_texture_compression_bptc")))
                return null;
              if (t === i.Fn)
                return o === i.KLL
                  ? a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
                  : a.COMPRESSED_RGBA_BPTC_UNORM_EXT;
              if (t === i.H23) return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
              if (t === i.W9U) return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
            }
            if (t === i.Kef || t === i.XG_ || t === i.HO_ || t === i.CWW) {
              if (null === (a = n.get("EXT_texture_compression_rgtc")))
                return null;
              if (t === i.Fn) return a.COMPRESSED_RED_RGTC1_EXT;
              if (t === i.XG_) return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;
              if (t === i.HO_) return a.COMPRESSED_RED_GREEN_RGTC2_EXT;
              if (t === i.CWW) return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
            }
            return t === i.V3x
              ? e.UNSIGNED_INT_24_8
              : void 0 !== e[t]
              ? e[t]
              : null;
          },
        };
      }
      let nv = { type: "move" };
      class nE {
        constructor() {
          (this._targetRay = null), (this._grip = null), (this._hand = null);
        }
        getHandSpace() {
          return (
            null === this._hand &&
              ((this._hand = new i.YJl()),
              (this._hand.matrixAutoUpdate = !1),
              (this._hand.visible = !1),
              (this._hand.joints = {}),
              (this._hand.inputState = { pinching: !1 })),
            this._hand
          );
        }
        getTargetRaySpace() {
          return (
            null === this._targetRay &&
              ((this._targetRay = new i.YJl()),
              (this._targetRay.matrixAutoUpdate = !1),
              (this._targetRay.visible = !1),
              (this._targetRay.hasLinearVelocity = !1),
              (this._targetRay.linearVelocity = new i.Pq0()),
              (this._targetRay.hasAngularVelocity = !1),
              (this._targetRay.angularVelocity = new i.Pq0())),
            this._targetRay
          );
        }
        getGripSpace() {
          return (
            null === this._grip &&
              ((this._grip = new i.YJl()),
              (this._grip.matrixAutoUpdate = !1),
              (this._grip.visible = !1),
              (this._grip.hasLinearVelocity = !1),
              (this._grip.linearVelocity = new i.Pq0()),
              (this._grip.hasAngularVelocity = !1),
              (this._grip.angularVelocity = new i.Pq0())),
            this._grip
          );
        }
        dispatchEvent(e) {
          return (
            null !== this._targetRay && this._targetRay.dispatchEvent(e),
            null !== this._grip && this._grip.dispatchEvent(e),
            null !== this._hand && this._hand.dispatchEvent(e),
            this
          );
        }
        connect(e) {
          if (e && e.hand) {
            let n = this._hand;
            if (n) for (let t of e.hand.values()) this._getHandJoint(n, t);
          }
          return this.dispatchEvent({ type: "connected", data: e }), this;
        }
        disconnect(e) {
          return (
            this.dispatchEvent({ type: "disconnected", data: e }),
            null !== this._targetRay && (this._targetRay.visible = !1),
            null !== this._grip && (this._grip.visible = !1),
            null !== this._hand && (this._hand.visible = !1),
            this
          );
        }
        update(e, n, t) {
          let i = null,
            r = null,
            a = null,
            o = this._targetRay,
            l = this._grip,
            s = this._hand;
          if (e && "visible-blurred" !== n.session.visibilityState) {
            if (s && e.hand) {
              for (let i of ((a = !0), e.hand.values())) {
                let e = n.getJointPose(i, t),
                  r = this._getHandJoint(s, i);
                null !== e &&
                  (r.matrix.fromArray(e.transform.matrix),
                  r.matrix.decompose(r.position, r.rotation, r.scale),
                  (r.matrixWorldNeedsUpdate = !0),
                  (r.jointRadius = e.radius)),
                  (r.visible = null !== e);
              }
              let i = s.joints["index-finger-tip"],
                r = s.joints["thumb-tip"],
                o = i.position.distanceTo(r.position);
              s.inputState.pinching && o > 0.025
                ? ((s.inputState.pinching = !1),
                  this.dispatchEvent({
                    type: "pinchend",
                    handedness: e.handedness,
                    target: this,
                  }))
                : !s.inputState.pinching &&
                  o <= 0.015 &&
                  ((s.inputState.pinching = !0),
                  this.dispatchEvent({
                    type: "pinchstart",
                    handedness: e.handedness,
                    target: this,
                  }));
            } else
              null !== l &&
                e.gripSpace &&
                null !== (r = n.getPose(e.gripSpace, t)) &&
                (l.matrix.fromArray(r.transform.matrix),
                l.matrix.decompose(l.position, l.rotation, l.scale),
                (l.matrixWorldNeedsUpdate = !0),
                r.linearVelocity
                  ? ((l.hasLinearVelocity = !0),
                    l.linearVelocity.copy(r.linearVelocity))
                  : (l.hasLinearVelocity = !1),
                r.angularVelocity
                  ? ((l.hasAngularVelocity = !0),
                    l.angularVelocity.copy(r.angularVelocity))
                  : (l.hasAngularVelocity = !1));
            null !== o &&
              (null === (i = n.getPose(e.targetRaySpace, t)) &&
                null !== r &&
                (i = r),
              null !== i &&
                (o.matrix.fromArray(i.transform.matrix),
                o.matrix.decompose(o.position, o.rotation, o.scale),
                (o.matrixWorldNeedsUpdate = !0),
                i.linearVelocity
                  ? ((o.hasLinearVelocity = !0),
                    o.linearVelocity.copy(i.linearVelocity))
                  : (o.hasLinearVelocity = !1),
                i.angularVelocity
                  ? ((o.hasAngularVelocity = !0),
                    o.angularVelocity.copy(i.angularVelocity))
                  : (o.hasAngularVelocity = !1),
                this.dispatchEvent(nv)));
          }
          return (
            null !== o && (o.visible = null !== i),
            null !== l && (l.visible = null !== r),
            null !== s && (s.visible = null !== a),
            this
          );
        }
        _getHandJoint(e, n) {
          if (void 0 === e.joints[n.jointName]) {
            let t = new i.YJl();
            (t.matrixAutoUpdate = !1),
              (t.visible = !1),
              (e.joints[n.jointName] = t),
              e.add(t);
          }
          return e.joints[n.jointName];
        }
      }
      let nS = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`,
        nT = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
      class nM {
        constructor() {
          (this.texture = null),
            (this.mesh = null),
            (this.depthNear = 0),
            (this.depthFar = 0);
        }
        init(e, n, t) {
          if (null === this.texture) {
            let r = new i.gPd();
            (e.properties.get(r).__webglTexture = n.texture),
              (n.depthNear != t.depthNear || n.depthFar != t.depthFar) &&
                ((this.depthNear = n.depthNear), (this.depthFar = n.depthFar)),
              (this.texture = r);
          }
        }
        getMesh(e) {
          if (null !== this.texture && null === this.mesh) {
            let n = e.cameras[0].viewport,
              t = new i.BKk({
                vertexShader: nS,
                fragmentShader: nT,
                uniforms: {
                  depthColor: { value: this.texture },
                  depthWidth: { value: n.z },
                  depthHeight: { value: n.w },
                },
              });
            this.mesh = new i.eaF(new i.bdM(20, 20), t);
          }
          return this.mesh;
        }
        reset() {
          (this.texture = null), (this.mesh = null);
        }
        getDepthTexture() {
          return this.texture;
        }
      }
      class nx extends i.Qev {
        constructor(e, n) {
          super();
          let t = this,
            a = null,
            o = 1,
            l = null,
            s = "local-floor",
            c = 1,
            d = null,
            u = null,
            f = null,
            p = null,
            m = null,
            h = null,
            _ = new nM(),
            g = n.getContextAttributes(),
            v = null,
            E = null,
            S = [],
            T = [],
            M = new i.I9Y(),
            x = null,
            R = new i.ubm();
          R.viewport = new i.IUQ();
          let A = new i.ubm();
          A.viewport = new i.IUQ();
          let b = [R, A],
            C = new i.nZQ(),
            L = null,
            P = null;
          function U(e) {
            let n = T.indexOf(e.inputSource);
            if (-1 === n) return;
            let t = S[n];
            void 0 !== t &&
              (t.update(e.inputSource, e.frame, d || l),
              t.dispatchEvent({ type: e.type, data: e.inputSource }));
          }
          function w() {
            a.removeEventListener("select", U),
              a.removeEventListener("selectstart", U),
              a.removeEventListener("selectend", U),
              a.removeEventListener("squeeze", U),
              a.removeEventListener("squeezestart", U),
              a.removeEventListener("squeezeend", U),
              a.removeEventListener("end", w),
              a.removeEventListener("inputsourceschange", D);
            for (let e = 0; e < S.length; e++) {
              let n = T[e];
              null !== n && ((T[e] = null), S[e].disconnect(n));
            }
            (L = null),
              (P = null),
              _.reset(),
              e.setRenderTarget(v),
              (m = null),
              (p = null),
              (f = null),
              (a = null),
              (E = null),
              F.stop(),
              (t.isPresenting = !1),
              e.setPixelRatio(x),
              e.setSize(M.width, M.height, !1),
              t.dispatchEvent({ type: "sessionend" });
          }
          function D(e) {
            for (let n = 0; n < e.removed.length; n++) {
              let t = e.removed[n],
                i = T.indexOf(t);
              i >= 0 && ((T[i] = null), S[i].disconnect(t));
            }
            for (let n = 0; n < e.added.length; n++) {
              let t = e.added[n],
                i = T.indexOf(t);
              if (-1 === i) {
                for (let e = 0; e < S.length; e++) {
                  if (e >= T.length) {
                    T.push(t), (i = e);
                    break;
                  }
                  if (null === T[e]) {
                    (T[e] = t), (i = e);
                    break;
                  }
                }
                if (-1 === i) break;
              }
              let r = S[i];
              r && r.connect(t);
            }
          }
          (this.cameraAutoUpdate = !0),
            (this.enabled = !1),
            (this.isPresenting = !1),
            (this.getController = function (e) {
              let n = S[e];
              return (
                void 0 === n && ((n = new nE()), (S[e] = n)),
                n.getTargetRaySpace()
              );
            }),
            (this.getControllerGrip = function (e) {
              let n = S[e];
              return (
                void 0 === n && ((n = new nE()), (S[e] = n)), n.getGripSpace()
              );
            }),
            (this.getHand = function (e) {
              let n = S[e];
              return (
                void 0 === n && ((n = new nE()), (S[e] = n)), n.getHandSpace()
              );
            }),
            (this.setFramebufferScaleFactor = function (e) {
              (o = e),
                !0 === t.isPresenting &&
                  console.warn(
                    "THREE.WebXRManager: Cannot change framebuffer scale while presenting."
                  );
            }),
            (this.setReferenceSpaceType = function (e) {
              (s = e),
                !0 === t.isPresenting &&
                  console.warn(
                    "THREE.WebXRManager: Cannot change reference space type while presenting."
                  );
            }),
            (this.getReferenceSpace = function () {
              return d || l;
            }),
            (this.setReferenceSpace = function (e) {
              d = e;
            }),
            (this.getBaseLayer = function () {
              return null !== p ? p : m;
            }),
            (this.getBinding = function () {
              return f;
            }),
            (this.getFrame = function () {
              return h;
            }),
            (this.getSession = function () {
              return a;
            }),
            (this.setSession = async function (r) {
              if (null !== (a = r)) {
                if (
                  ((v = e.getRenderTarget()),
                  a.addEventListener("select", U),
                  a.addEventListener("selectstart", U),
                  a.addEventListener("selectend", U),
                  a.addEventListener("squeeze", U),
                  a.addEventListener("squeezestart", U),
                  a.addEventListener("squeezeend", U),
                  a.addEventListener("end", w),
                  a.addEventListener("inputsourceschange", D),
                  !0 !== g.xrCompatible && (await n.makeXRCompatible()),
                  (x = e.getPixelRatio()),
                  e.getSize(M),
                  void 0 === a.renderState.layers)
                ) {
                  let t = {
                    antialias: g.antialias,
                    alpha: !0,
                    depth: g.depth,
                    stencil: g.stencil,
                    framebufferScaleFactor: o,
                  };
                  (m = new XRWebGLLayer(a, n, t)),
                    a.updateRenderState({ baseLayer: m }),
                    e.setPixelRatio(1),
                    e.setSize(m.framebufferWidth, m.framebufferHeight, !1),
                    (E = new i.nWS(m.framebufferWidth, m.framebufferHeight, {
                      format: i.GWd,
                      type: i.OUM,
                      colorSpace: e.outputColorSpace,
                      stencilBuffer: g.stencil,
                    }));
                } else {
                  let t = null,
                    r = null,
                    l = null;
                  g.depth &&
                    ((l = g.stencil ? n.DEPTH24_STENCIL8 : n.DEPTH_COMPONENT24),
                    (t = g.stencil ? i.dcC : i.zdS),
                    (r = g.stencil ? i.V3x : i.bkx));
                  let s = {
                    colorFormat: n.RGBA8,
                    depthFormat: l,
                    scaleFactor: o,
                  };
                  (p = (f = new XRWebGLBinding(a, n)).createProjectionLayer(s)),
                    a.updateRenderState({ layers: [p] }),
                    e.setPixelRatio(1),
                    e.setSize(p.textureWidth, p.textureHeight, !1),
                    (E = new i.nWS(p.textureWidth, p.textureHeight, {
                      format: i.GWd,
                      type: i.OUM,
                      depthTexture: new i.VCu(
                        p.textureWidth,
                        p.textureHeight,
                        r,
                        void 0,
                        void 0,
                        void 0,
                        void 0,
                        void 0,
                        void 0,
                        t
                      ),
                      stencilBuffer: g.stencil,
                      colorSpace: e.outputColorSpace,
                      samples: g.antialias ? 4 : 0,
                      resolveDepthBuffer: !1 === p.ignoreDepthValues,
                    }));
                }
                (E.isXRRenderTarget = !0),
                  this.setFoveation(c),
                  (d = null),
                  (l = await a.requestReferenceSpace(s)),
                  F.setContext(a),
                  F.start(),
                  (t.isPresenting = !0),
                  t.dispatchEvent({ type: "sessionstart" });
              }
            }),
            (this.getEnvironmentBlendMode = function () {
              if (null !== a) return a.environmentBlendMode;
            }),
            (this.getDepthTexture = function () {
              return _.getDepthTexture();
            });
          let y = new i.Pq0(),
            I = new i.Pq0();
          function N(e, n) {
            null === n
              ? e.matrixWorld.copy(e.matrix)
              : e.matrixWorld.multiplyMatrices(n.matrixWorld, e.matrix),
              e.matrixWorldInverse.copy(e.matrixWorld).invert();
          }
          (this.updateCamera = function (e) {
            if (null === a) return;
            let n = e.near,
              t = e.far;
            null !== _.texture &&
              (_.depthNear > 0 && (n = _.depthNear),
              _.depthFar > 0 && (t = _.depthFar)),
              (C.near = A.near = R.near = n),
              (C.far = A.far = R.far = t),
              (L !== C.near || P !== C.far) &&
                (a.updateRenderState({ depthNear: C.near, depthFar: C.far }),
                (L = C.near),
                (P = C.far)),
              (R.layers.mask = 2 | e.layers.mask),
              (A.layers.mask = 4 | e.layers.mask),
              (C.layers.mask = R.layers.mask | A.layers.mask);
            let r = e.parent,
              o = C.cameras;
            N(C, r);
            for (let e = 0; e < o.length; e++) N(o[e], r);
            2 === o.length
              ? (function (e, n, t) {
                  y.setFromMatrixPosition(n.matrixWorld),
                    I.setFromMatrixPosition(t.matrixWorld);
                  let i = y.distanceTo(I),
                    r = n.projectionMatrix.elements,
                    a = t.projectionMatrix.elements,
                    o = r[14] / (r[10] - 1),
                    l = r[14] / (r[10] + 1),
                    s = (r[9] + 1) / r[5],
                    c = (r[9] - 1) / r[5],
                    d = (r[8] - 1) / r[0],
                    u = (a[8] + 1) / a[0],
                    f = i / (-d + u),
                    p = -(f * d);
                  if (
                    (n.matrixWorld.decompose(e.position, e.quaternion, e.scale),
                    e.translateX(p),
                    e.translateZ(f),
                    e.matrixWorld.compose(e.position, e.quaternion, e.scale),
                    e.matrixWorldInverse.copy(e.matrixWorld).invert(),
                    -1 === r[10])
                  )
                    e.projectionMatrix.copy(n.projectionMatrix),
                      e.projectionMatrixInverse.copy(n.projectionMatrixInverse);
                  else {
                    let n = o + f,
                      t = l + f;
                    e.projectionMatrix.makePerspective(
                      o * d - p,
                      o * u + (i - p),
                      ((s * l) / t) * n,
                      ((c * l) / t) * n,
                      n,
                      t
                    ),
                      e.projectionMatrixInverse
                        .copy(e.projectionMatrix)
                        .invert();
                  }
                })(C, R, A)
              : C.projectionMatrix.copy(R.projectionMatrix),
              null === r
                ? e.matrix.copy(C.matrixWorld)
                : (e.matrix.copy(r.matrixWorld),
                  e.matrix.invert(),
                  e.matrix.multiply(C.matrixWorld)),
              e.matrix.decompose(e.position, e.quaternion, e.scale),
              e.updateMatrixWorld(!0),
              e.projectionMatrix.copy(C.projectionMatrix),
              e.projectionMatrixInverse.copy(C.projectionMatrixInverse),
              e.isPerspectiveCamera &&
                ((e.fov =
                  2 * i.a55 * Math.atan(1 / e.projectionMatrix.elements[5])),
                (e.zoom = 1));
          }),
            (this.getCamera = function () {
              return C;
            }),
            (this.getFoveation = function () {
              if (null !== p || null !== m) return c;
            }),
            (this.setFoveation = function (e) {
              (c = e),
                null !== p && (p.fixedFoveation = e),
                null !== m &&
                  void 0 !== m.fixedFoveation &&
                  (m.fixedFoveation = e);
            }),
            (this.hasDepthSensing = function () {
              return null !== _.texture;
            }),
            (this.getDepthSensingMesh = function () {
              return _.getMesh(C);
            });
          let O = null,
            F = new r();
          F.setAnimationLoop(function (n, r) {
            if (((u = r.getViewerPose(d || l)), (h = r), null !== u)) {
              let n = u.views;
              null !== m &&
                (e.setRenderTargetFramebuffer(E, m.framebuffer),
                e.setRenderTarget(E));
              let t = !1;
              n.length !== C.cameras.length &&
                ((C.cameras.length = 0), (t = !0));
              for (let r = 0; r < n.length; r++) {
                let a = n[r],
                  o = null;
                if (null !== m) o = m.getViewport(a);
                else {
                  let n = f.getViewSubImage(p, a);
                  (o = n.viewport),
                    0 === r &&
                      (e.setRenderTargetTextures(
                        E,
                        n.colorTexture,
                        p.ignoreDepthValues ? void 0 : n.depthStencilTexture
                      ),
                      e.setRenderTarget(E));
                }
                let l = b[r];
                void 0 === l &&
                  ((l = new i.ubm()).layers.enable(r),
                  (l.viewport = new i.IUQ()),
                  (b[r] = l)),
                  l.matrix.fromArray(a.transform.matrix),
                  l.matrix.decompose(l.position, l.quaternion, l.scale),
                  l.projectionMatrix.fromArray(a.projectionMatrix),
                  l.projectionMatrixInverse.copy(l.projectionMatrix).invert(),
                  l.viewport.set(o.x, o.y, o.width, o.height),
                  0 === r &&
                    (C.matrix.copy(l.matrix),
                    C.matrix.decompose(C.position, C.quaternion, C.scale)),
                  !0 === t && C.cameras.push(l);
              }
              let r = a.enabledFeatures;
              if (r && r.includes("depth-sensing")) {
                let t = f.getDepthInformation(n[0]);
                t && t.isValid && t.texture && _.init(e, t, a.renderState);
              }
            }
            for (let e = 0; e < S.length; e++) {
              let n = T[e],
                t = S[e];
              null !== n && void 0 !== t && t.update(n, r, d || l);
            }
            O && O(n, r),
              r.detectedPlanes &&
                t.dispatchEvent({ type: "planesdetected", data: r }),
              (h = null);
          }),
            (this.setAnimationLoop = function (e) {
              O = e;
            }),
            (this.dispose = function () {});
        }
      }
      let nR = new i.O9p(),
        nA = new i.kn4();
      function nb(e, n) {
        function t(e, n) {
          !0 === e.matrixAutoUpdate && e.updateMatrix(), n.value.copy(e.matrix);
        }
        function r(e, r) {
          (e.opacity.value = r.opacity),
            r.color && e.diffuse.value.copy(r.color),
            r.emissive &&
              e.emissive.value
                .copy(r.emissive)
                .multiplyScalar(r.emissiveIntensity),
            r.map && ((e.map.value = r.map), t(r.map, e.mapTransform)),
            r.alphaMap &&
              ((e.alphaMap.value = r.alphaMap),
              t(r.alphaMap, e.alphaMapTransform)),
            r.bumpMap &&
              ((e.bumpMap.value = r.bumpMap),
              t(r.bumpMap, e.bumpMapTransform),
              (e.bumpScale.value = r.bumpScale),
              r.side === i.hsX && (e.bumpScale.value *= -1)),
            r.normalMap &&
              ((e.normalMap.value = r.normalMap),
              t(r.normalMap, e.normalMapTransform),
              e.normalScale.value.copy(r.normalScale),
              r.side === i.hsX && e.normalScale.value.negate()),
            r.displacementMap &&
              ((e.displacementMap.value = r.displacementMap),
              t(r.displacementMap, e.displacementMapTransform),
              (e.displacementScale.value = r.displacementScale),
              (e.displacementBias.value = r.displacementBias)),
            r.emissiveMap &&
              ((e.emissiveMap.value = r.emissiveMap),
              t(r.emissiveMap, e.emissiveMapTransform)),
            r.specularMap &&
              ((e.specularMap.value = r.specularMap),
              t(r.specularMap, e.specularMapTransform)),
            r.alphaTest > 0 && (e.alphaTest.value = r.alphaTest);
          let a = n.get(r),
            o = a.envMap,
            l = a.envMapRotation;
          o &&
            ((e.envMap.value = o),
            nR.copy(l),
            (nR.x *= -1),
            (nR.y *= -1),
            (nR.z *= -1),
            o.isCubeTexture &&
              !1 === o.isRenderTargetTexture &&
              ((nR.y *= -1), (nR.z *= -1)),
            e.envMapRotation.value.setFromMatrix4(nA.makeRotationFromEuler(nR)),
            (e.flipEnvMap.value =
              o.isCubeTexture && !1 === o.isRenderTargetTexture ? -1 : 1),
            (e.reflectivity.value = r.reflectivity),
            (e.ior.value = r.ior),
            (e.refractionRatio.value = r.refractionRatio)),
            r.lightMap &&
              ((e.lightMap.value = r.lightMap),
              (e.lightMapIntensity.value = r.lightMapIntensity),
              t(r.lightMap, e.lightMapTransform)),
            r.aoMap &&
              ((e.aoMap.value = r.aoMap),
              (e.aoMapIntensity.value = r.aoMapIntensity),
              t(r.aoMap, e.aoMapTransform));
        }
        return {
          refreshFogUniforms: function (n, t) {
            t.color.getRGB(n.fogColor.value, (0, i._Ut)(e)),
              t.isFog
                ? ((n.fogNear.value = t.near), (n.fogFar.value = t.far))
                : t.isFogExp2 && (n.fogDensity.value = t.density);
          },
          refreshMaterialUniforms: function (e, a, o, l, s) {
            a.isMeshBasicMaterial
              ? r(e, a)
              : a.isMeshLambertMaterial
              ? r(e, a)
              : a.isMeshToonMaterial
              ? (r(e, a),
                a.gradientMap && (e.gradientMap.value = a.gradientMap))
              : a.isMeshPhongMaterial
              ? (r(e, a),
                e.specular.value.copy(a.specular),
                (e.shininess.value = Math.max(a.shininess, 1e-4)))
              : a.isMeshStandardMaterial
              ? (r(e, a),
                (e.metalness.value = a.metalness),
                a.metalnessMap &&
                  ((e.metalnessMap.value = a.metalnessMap),
                  t(a.metalnessMap, e.metalnessMapTransform)),
                (e.roughness.value = a.roughness),
                a.roughnessMap &&
                  ((e.roughnessMap.value = a.roughnessMap),
                  t(a.roughnessMap, e.roughnessMapTransform)),
                a.envMap && (e.envMapIntensity.value = a.envMapIntensity),
                a.isMeshPhysicalMaterial &&
                  ((e.ior.value = a.ior),
                  a.sheen > 0 &&
                    (e.sheenColor.value
                      .copy(a.sheenColor)
                      .multiplyScalar(a.sheen),
                    (e.sheenRoughness.value = a.sheenRoughness),
                    a.sheenColorMap &&
                      ((e.sheenColorMap.value = a.sheenColorMap),
                      t(a.sheenColorMap, e.sheenColorMapTransform)),
                    a.sheenRoughnessMap &&
                      ((e.sheenRoughnessMap.value = a.sheenRoughnessMap),
                      t(a.sheenRoughnessMap, e.sheenRoughnessMapTransform))),
                  a.clearcoat > 0 &&
                    ((e.clearcoat.value = a.clearcoat),
                    (e.clearcoatRoughness.value = a.clearcoatRoughness),
                    a.clearcoatMap &&
                      ((e.clearcoatMap.value = a.clearcoatMap),
                      t(a.clearcoatMap, e.clearcoatMapTransform)),
                    a.clearcoatRoughnessMap &&
                      ((e.clearcoatRoughnessMap.value =
                        a.clearcoatRoughnessMap),
                      t(
                        a.clearcoatRoughnessMap,
                        e.clearcoatRoughnessMapTransform
                      )),
                    a.clearcoatNormalMap &&
                      ((e.clearcoatNormalMap.value = a.clearcoatNormalMap),
                      t(a.clearcoatNormalMap, e.clearcoatNormalMapTransform),
                      e.clearcoatNormalScale.value.copy(a.clearcoatNormalScale),
                      a.side === i.hsX &&
                        e.clearcoatNormalScale.value.negate())),
                  a.dispersion > 0 && (e.dispersion.value = a.dispersion),
                  a.iridescence > 0 &&
                    ((e.iridescence.value = a.iridescence),
                    (e.iridescenceIOR.value = a.iridescenceIOR),
                    (e.iridescenceThicknessMinimum.value =
                      a.iridescenceThicknessRange[0]),
                    (e.iridescenceThicknessMaximum.value =
                      a.iridescenceThicknessRange[1]),
                    a.iridescenceMap &&
                      ((e.iridescenceMap.value = a.iridescenceMap),
                      t(a.iridescenceMap, e.iridescenceMapTransform)),
                    a.iridescenceThicknessMap &&
                      ((e.iridescenceThicknessMap.value =
                        a.iridescenceThicknessMap),
                      t(
                        a.iridescenceThicknessMap,
                        e.iridescenceThicknessMapTransform
                      ))),
                  a.transmission > 0 &&
                    ((e.transmission.value = a.transmission),
                    (e.transmissionSamplerMap.value = s.texture),
                    e.transmissionSamplerSize.value.set(s.width, s.height),
                    a.transmissionMap &&
                      ((e.transmissionMap.value = a.transmissionMap),
                      t(a.transmissionMap, e.transmissionMapTransform)),
                    (e.thickness.value = a.thickness),
                    a.thicknessMap &&
                      ((e.thicknessMap.value = a.thicknessMap),
                      t(a.thicknessMap, e.thicknessMapTransform)),
                    (e.attenuationDistance.value = a.attenuationDistance),
                    e.attenuationColor.value.copy(a.attenuationColor)),
                  a.anisotropy > 0 &&
                    (e.anisotropyVector.value.set(
                      a.anisotropy * Math.cos(a.anisotropyRotation),
                      a.anisotropy * Math.sin(a.anisotropyRotation)
                    ),
                    a.anisotropyMap &&
                      ((e.anisotropyMap.value = a.anisotropyMap),
                      t(a.anisotropyMap, e.anisotropyMapTransform))),
                  (e.specularIntensity.value = a.specularIntensity),
                  e.specularColor.value.copy(a.specularColor),
                  a.specularColorMap &&
                    ((e.specularColorMap.value = a.specularColorMap),
                    t(a.specularColorMap, e.specularColorMapTransform)),
                  a.specularIntensityMap &&
                    ((e.specularIntensityMap.value = a.specularIntensityMap),
                    t(
                      a.specularIntensityMap,
                      e.specularIntensityMapTransform
                    ))))
              : a.isMeshMatcapMaterial
              ? (r(e, a), a.matcap && (e.matcap.value = a.matcap))
              : a.isMeshDepthMaterial
              ? r(e, a)
              : a.isMeshDistanceMaterial
              ? (r(e, a),
                (function (e, t) {
                  let i = n.get(t).light;
                  e.referencePosition.value.setFromMatrixPosition(
                    i.matrixWorld
                  ),
                    (e.nearDistance.value = i.shadow.camera.near),
                    (e.farDistance.value = i.shadow.camera.far);
                })(e, a))
              : a.isMeshNormalMaterial
              ? r(e, a)
              : a.isLineBasicMaterial
              ? (e.diffuse.value.copy(a.color),
                (e.opacity.value = a.opacity),
                a.map && ((e.map.value = a.map), t(a.map, e.mapTransform)),
                a.isLineDashedMaterial &&
                  ((e.dashSize.value = a.dashSize),
                  (e.totalSize.value = a.dashSize + a.gapSize),
                  (e.scale.value = a.scale)))
              : a.isPointsMaterial
              ? (e.diffuse.value.copy(a.color),
                (e.opacity.value = a.opacity),
                (e.size.value = a.size * o),
                (e.scale.value = 0.5 * l),
                a.map && ((e.map.value = a.map), t(a.map, e.uvTransform)),
                a.alphaMap &&
                  ((e.alphaMap.value = a.alphaMap),
                  t(a.alphaMap, e.alphaMapTransform)),
                a.alphaTest > 0 && (e.alphaTest.value = a.alphaTest))
              : a.isSpriteMaterial
              ? (e.diffuse.value.copy(a.color),
                (e.opacity.value = a.opacity),
                (e.rotation.value = a.rotation),
                a.map && ((e.map.value = a.map), t(a.map, e.mapTransform)),
                a.alphaMap &&
                  ((e.alphaMap.value = a.alphaMap),
                  t(a.alphaMap, e.alphaMapTransform)),
                a.alphaTest > 0 && (e.alphaTest.value = a.alphaTest))
              : a.isShadowMaterial
              ? (e.color.value.copy(a.color), (e.opacity.value = a.opacity))
              : a.isShaderMaterial && (a.uniformsNeedUpdate = !1);
          },
        };
      }
      function nC(e, n, t, i) {
        let r = {},
          a = {},
          o = [],
          l = e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);
        function s(e) {
          let n = { boundary: 0, storage: 0 };
          return (
            "number" == typeof e || "boolean" == typeof e
              ? ((n.boundary = 4), (n.storage = 4))
              : e.isVector2
              ? ((n.boundary = 8), (n.storage = 8))
              : e.isVector3 || e.isColor
              ? ((n.boundary = 16), (n.storage = 12))
              : e.isVector4
              ? ((n.boundary = 16), (n.storage = 16))
              : e.isMatrix3
              ? ((n.boundary = 48), (n.storage = 48))
              : e.isMatrix4
              ? ((n.boundary = 64), (n.storage = 64))
              : e.isTexture
              ? console.warn(
                  "THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."
                )
              : console.warn(
                  "THREE.WebGLRenderer: Unsupported uniform value type.",
                  e
                ),
            n
          );
        }
        function c(n) {
          let t = n.target;
          t.removeEventListener("dispose", c);
          let i = o.indexOf(t.__bindingPointIndex);
          o.splice(i, 1),
            e.deleteBuffer(r[t.id]),
            delete r[t.id],
            delete a[t.id];
        }
        return {
          bind: function (e, n) {
            let t = n.program;
            i.uniformBlockBinding(e, t);
          },
          update: function (t, d) {
            let u = r[t.id];
            void 0 === u &&
              ((function (e) {
                let n = e.uniforms,
                  t = 0;
                for (let e = 0, i = n.length; e < i; e++) {
                  let i = Array.isArray(n[e]) ? n[e] : [n[e]];
                  for (let e = 0, n = i.length; e < n; e++) {
                    let n = i[e],
                      r = Array.isArray(n.value) ? n.value : [n.value];
                    for (let e = 0, i = r.length; e < i; e++) {
                      let i = s(r[e]),
                        a = t % 16,
                        o = a % i.boundary,
                        l = a + o;
                      (t += o),
                        0 !== l && 16 - l < i.storage && (t += 16 - l),
                        (n.__data = new Float32Array(
                          i.storage / Float32Array.BYTES_PER_ELEMENT
                        )),
                        (n.__offset = t),
                        (t += i.storage);
                    }
                  }
                }
                let i = t % 16;
                i > 0 && (t += 16 - i), (e.__size = t), (e.__cache = {});
              })(t),
              (u = (function (n) {
                let t = (function () {
                  for (let e = 0; e < l; e++)
                    if (-1 === o.indexOf(e)) return o.push(e), e;
                  return (
                    console.error(
                      "THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."
                    ),
                    0
                  );
                })();
                n.__bindingPointIndex = t;
                let i = e.createBuffer(),
                  r = n.__size,
                  a = n.usage;
                return (
                  e.bindBuffer(e.UNIFORM_BUFFER, i),
                  e.bufferData(e.UNIFORM_BUFFER, r, a),
                  e.bindBuffer(e.UNIFORM_BUFFER, null),
                  e.bindBufferBase(e.UNIFORM_BUFFER, t, i),
                  i
                );
              })(t)),
              (r[t.id] = u),
              t.addEventListener("dispose", c));
            let f = d.program;
            i.updateUBOMapping(t, f);
            let p = n.render.frame;
            a[t.id] !== p &&
              ((function (n) {
                let t = r[n.id],
                  i = n.uniforms,
                  a = n.__cache;
                e.bindBuffer(e.UNIFORM_BUFFER, t);
                for (let n = 0, t = i.length; n < t; n++) {
                  let t = Array.isArray(i[n]) ? i[n] : [i[n]];
                  for (let i = 0, r = t.length; i < r; i++) {
                    let r = t[i];
                    if (
                      !0 ===
                      (function (e, n, t, i) {
                        let r = e.value,
                          a = n + "_" + t;
                        if (void 0 === i[a])
                          return (
                            "number" == typeof r || "boolean" == typeof r
                              ? (i[a] = r)
                              : (i[a] = r.clone()),
                            !0
                          );
                        {
                          let e = i[a];
                          if ("number" == typeof r || "boolean" == typeof r) {
                            if (e !== r) return (i[a] = r), !0;
                          } else if (!1 === e.equals(r)) return e.copy(r), !0;
                        }
                        return !1;
                      })(r, n, i, a)
                    ) {
                      let n = r.__offset,
                        t = Array.isArray(r.value) ? r.value : [r.value],
                        i = 0;
                      for (let a = 0; a < t.length; a++) {
                        let o = t[a],
                          l = s(o);
                        "number" == typeof o || "boolean" == typeof o
                          ? ((r.__data[0] = o),
                            e.bufferSubData(e.UNIFORM_BUFFER, n + i, r.__data))
                          : o.isMatrix3
                          ? ((r.__data[0] = o.elements[0]),
                            (r.__data[1] = o.elements[1]),
                            (r.__data[2] = o.elements[2]),
                            (r.__data[3] = 0),
                            (r.__data[4] = o.elements[3]),
                            (r.__data[5] = o.elements[4]),
                            (r.__data[6] = o.elements[5]),
                            (r.__data[7] = 0),
                            (r.__data[8] = o.elements[6]),
                            (r.__data[9] = o.elements[7]),
                            (r.__data[10] = o.elements[8]),
                            (r.__data[11] = 0))
                          : (o.toArray(r.__data, i),
                            (i += l.storage / Float32Array.BYTES_PER_ELEMENT));
                      }
                      e.bufferSubData(e.UNIFORM_BUFFER, n, r.__data);
                    }
                  }
                }
                e.bindBuffer(e.UNIFORM_BUFFER, null);
              })(t),
              (a[t.id] = p));
          },
          dispose: function () {
            for (let n in r) e.deleteBuffer(r[n]);
            (o = []), (r = {}), (a = {});
          },
        };
      }
      class nL {
        constructor(e = {}) {
          let n,
            t,
            o,
            l,
            s,
            c,
            d,
            u,
            v,
            E,
            S,
            T,
            M,
            x,
            R,
            A,
            b,
            C,
            L,
            P,
            U,
            w,
            D,
            y,
            V;
          let {
            canvas: k = (0, i.lPF)(),
            context: z = null,
            depth: W = !0,
            stencil: X = !1,
            alpha: Y = !1,
            antialias: K = !1,
            premultipliedAlpha: q = !0,
            preserveDrawingBuffer: j = !1,
            powerPreference: Q = "default",
            failIfMajorPerformanceCaveat: Z = !1,
            reverseDepthBuffer: $ = !1,
          } = e;
          if (((this.isWebGLRenderer = !0), null !== z)) {
            if (
              "undefined" != typeof WebGLRenderingContext &&
              z instanceof WebGLRenderingContext
            )
              throw Error(
                "THREE.WebGLRenderer: WebGL 1 is not supported since r163."
              );
            n = z.getContextAttributes().alpha;
          } else n = Y;
          let J = new Uint32Array(4),
            ee = new Int32Array(4),
            en = null,
            et = null,
            ei = [],
            er = [];
          (this.domElement = k),
            (this.debug = { checkShaderErrors: !0, onShaderError: null }),
            (this.autoClear = !0),
            (this.autoClearColor = !0),
            (this.autoClearDepth = !0),
            (this.autoClearStencil = !0),
            (this.sortObjects = !0),
            (this.clippingPlanes = []),
            (this.localClippingEnabled = !1),
            (this._outputColorSpace = i.er$),
            (this.toneMapping = i.y_p),
            (this.toneMappingExposure = 1);
          let ea = this,
            eo = !1,
            el = 0,
            es = 0,
            ec = null,
            ed = -1,
            eu = null,
            ef = new i.IUQ(),
            ep = new i.IUQ(),
            em = null,
            eh = new i.Q1f(0),
            e_ = 0,
            eg = k.width,
            ev = k.height,
            eE = 1,
            eS = null,
            eT = null,
            eM = new i.IUQ(0, 0, eg, ev),
            ex = new i.IUQ(0, 0, eg, ev),
            eR = !1,
            eA = new i.PPD(),
            eb = !1,
            eC = !1,
            eL = new i.kn4(),
            eP = new i.kn4(),
            eU = new i.Pq0(),
            ew = new i.IUQ(),
            eD = {
              background: null,
              fog: null,
              environment: null,
              overrideMaterial: null,
              isScene: !0,
            },
            ey = !1;
          function eI() {
            return null === ec ? eE : 1;
          }
          let eN = z;
          function eO(e, n) {
            return k.getContext(e, n);
          }
          try {
            if (
              ("setAttribute" in k &&
                k.setAttribute("data-engine", `three.js r${i.sPf}`),
              k.addEventListener("webglcontextlost", eH, !1),
              k.addEventListener("webglcontextrestored", eG, !1),
              k.addEventListener("webglcontextcreationerror", eV, !1),
              null === eN)
            ) {
              let e = "webgl2";
              if (
                ((eN = eO(e, {
                  alpha: !0,
                  depth: W,
                  stencil: X,
                  antialias: K,
                  premultipliedAlpha: q,
                  preserveDrawingBuffer: j,
                  powerPreference: Q,
                  failIfMajorPerformanceCaveat: Z,
                })),
                null === eN)
              ) {
                if (eO(e))
                  throw Error(
                    "Error creating WebGL context with your selected attributes."
                  );
                throw Error("Error creating WebGL context.");
              }
            }
          } catch (e) {
            throw (console.error("THREE.WebGLRenderer: " + e.message), e);
          }
          function eF() {
            (t = new N(eN)).init(),
              (D = new ng(eN, t)),
              (o = new h(eN, t, e, D)),
              (l = new nh(eN, t)),
              o.reverseDepthBuffer && $ && l.buffers.depth.setReversed(!0),
              (s = new B(eN)),
              (c = new nt()),
              (d = new n_(eN, t, l, c, o, D, s)),
              (u = new g(ea)),
              (v = new I(ea)),
              (E = new a(eN)),
              (y = new p(eN, E)),
              (S = new O(eN, E, s, y)),
              (T = new G(eN, S, E, s)),
              (P = new H(eN, o, d)),
              (b = new _(c)),
              (M = new nn(ea, u, v, t, o, y, b)),
              (x = new nb(ea, c)),
              (R = new no()),
              (A = new nf(t)),
              (L = new f(ea, u, v, l, T, n, q)),
              (C = new np(ea, T, o)),
              (V = new nC(eN, s, o, l)),
              (U = new m(eN, t, s)),
              (w = new F(eN, t, s)),
              (s.programs = M.programs),
              (ea.capabilities = o),
              (ea.extensions = t),
              (ea.properties = c),
              (ea.renderLists = R),
              (ea.shadowMap = C),
              (ea.state = l),
              (ea.info = s);
          }
          eF();
          let eB = new nx(ea, eN);
          function eH(e) {
            e.preventDefault(),
              console.log("THREE.WebGLRenderer: Context Lost."),
              (eo = !0);
          }
          function eG() {
            console.log("THREE.WebGLRenderer: Context Restored."), (eo = !1);
            let e = s.autoReset,
              n = C.enabled,
              t = C.autoUpdate,
              i = C.needsUpdate,
              r = C.type;
            eF(),
              (s.autoReset = e),
              (C.enabled = n),
              (C.autoUpdate = t),
              (C.needsUpdate = i),
              (C.type = r);
          }
          function eV(e) {
            console.error(
              "THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",
              e.statusMessage
            );
          }
          function ek(e) {
            let n = e.target;
            n.removeEventListener("dispose", ek),
              (function (e) {
                let n = c.get(e).programs;
                void 0 !== n &&
                  (n.forEach(function (e) {
                    M.releaseProgram(e);
                  }),
                  e.isShaderMaterial && M.releaseShaderCache(e));
              })(n),
              c.remove(n);
          }
          function ez(e, n, t) {
            !0 === e.transparent && e.side === i.$EB && !1 === e.forceSinglePass
              ? ((e.side = i.hsX),
                (e.needsUpdate = !0),
                e0(e, n, t),
                (e.side = i.hB5),
                (e.needsUpdate = !0),
                e0(e, n, t),
                (e.side = i.$EB))
              : e0(e, n, t);
          }
          (this.xr = eB),
            (this.getContext = function () {
              return eN;
            }),
            (this.getContextAttributes = function () {
              return eN.getContextAttributes();
            }),
            (this.forceContextLoss = function () {
              let e = t.get("WEBGL_lose_context");
              e && e.loseContext();
            }),
            (this.forceContextRestore = function () {
              let e = t.get("WEBGL_lose_context");
              e && e.restoreContext();
            }),
            (this.getPixelRatio = function () {
              return eE;
            }),
            (this.setPixelRatio = function (e) {
              void 0 !== e && ((eE = e), this.setSize(eg, ev, !1));
            }),
            (this.getSize = function (e) {
              return e.set(eg, ev);
            }),
            (this.setSize = function (e, n, t = !0) {
              if (eB.isPresenting) {
                console.warn(
                  "THREE.WebGLRenderer: Can't change size while VR device is presenting."
                );
                return;
              }
              (eg = e),
                (ev = n),
                (k.width = Math.floor(e * eE)),
                (k.height = Math.floor(n * eE)),
                !0 === t &&
                  ((k.style.width = e + "px"), (k.style.height = n + "px")),
                this.setViewport(0, 0, e, n);
            }),
            (this.getDrawingBufferSize = function (e) {
              return e.set(eg * eE, ev * eE).floor();
            }),
            (this.setDrawingBufferSize = function (e, n, t) {
              (eg = e),
                (ev = n),
                (eE = t),
                (k.width = Math.floor(e * t)),
                (k.height = Math.floor(n * t)),
                this.setViewport(0, 0, e, n);
            }),
            (this.getCurrentViewport = function (e) {
              return e.copy(ef);
            }),
            (this.getViewport = function (e) {
              return e.copy(eM);
            }),
            (this.setViewport = function (e, n, t, i) {
              e.isVector4 ? eM.set(e.x, e.y, e.z, e.w) : eM.set(e, n, t, i),
                l.viewport(ef.copy(eM).multiplyScalar(eE).round());
            }),
            (this.getScissor = function (e) {
              return e.copy(ex);
            }),
            (this.setScissor = function (e, n, t, i) {
              e.isVector4 ? ex.set(e.x, e.y, e.z, e.w) : ex.set(e, n, t, i),
                l.scissor(ep.copy(ex).multiplyScalar(eE).round());
            }),
            (this.getScissorTest = function () {
              return eR;
            }),
            (this.setScissorTest = function (e) {
              l.setScissorTest((eR = e));
            }),
            (this.setOpaqueSort = function (e) {
              eS = e;
            }),
            (this.setTransparentSort = function (e) {
              eT = e;
            }),
            (this.getClearColor = function (e) {
              return e.copy(L.getClearColor());
            }),
            (this.setClearColor = function () {
              L.setClearColor.apply(L, arguments);
            }),
            (this.getClearAlpha = function () {
              return L.getClearAlpha();
            }),
            (this.setClearAlpha = function () {
              L.setClearAlpha.apply(L, arguments);
            }),
            (this.clear = function (e = !0, n = !0, t = !0) {
              let r = 0;
              if (e) {
                let e = !1;
                if (null !== ec) {
                  let n = ec.texture.format;
                  e = n === i.c90 || n === i.TkQ || n === i.ZQM;
                }
                if (e) {
                  let e = ec.texture.type,
                    n =
                      e === i.OUM ||
                      e === i.bkx ||
                      e === i.cHt ||
                      e === i.V3x ||
                      e === i.Wew ||
                      e === i.gJ2,
                    t = L.getClearColor(),
                    r = L.getClearAlpha(),
                    a = t.r,
                    o = t.g,
                    l = t.b;
                  n
                    ? ((J[0] = a),
                      (J[1] = o),
                      (J[2] = l),
                      (J[3] = r),
                      eN.clearBufferuiv(eN.COLOR, 0, J))
                    : ((ee[0] = a),
                      (ee[1] = o),
                      (ee[2] = l),
                      (ee[3] = r),
                      eN.clearBufferiv(eN.COLOR, 0, ee));
                } else r |= eN.COLOR_BUFFER_BIT;
              }
              n && (r |= eN.DEPTH_BUFFER_BIT),
                t &&
                  ((r |= eN.STENCIL_BUFFER_BIT),
                  this.state.buffers.stencil.setMask(0xffffffff)),
                eN.clear(r);
            }),
            (this.clearColor = function () {
              this.clear(!0, !1, !1);
            }),
            (this.clearDepth = function () {
              this.clear(!1, !0, !1);
            }),
            (this.clearStencil = function () {
              this.clear(!1, !1, !0);
            }),
            (this.dispose = function () {
              k.removeEventListener("webglcontextlost", eH, !1),
                k.removeEventListener("webglcontextrestored", eG, !1),
                k.removeEventListener("webglcontextcreationerror", eV, !1),
                L.dispose(),
                R.dispose(),
                A.dispose(),
                c.dispose(),
                u.dispose(),
                v.dispose(),
                T.dispose(),
                y.dispose(),
                V.dispose(),
                M.dispose(),
                eB.dispose(),
                eB.removeEventListener("sessionstart", eY),
                eB.removeEventListener("sessionend", eK),
                eq.stop();
            }),
            (this.renderBufferDirect = function (e, n, r, a, s, f) {
              let p;
              null === n && (n = eD);
              let m = s.isMesh && 0 > s.matrixWorld.determinant(),
                h = (function (e, n, t, r, a) {
                  var s;
                  !0 !== n.isScene && (n = eD), d.resetTextureUnits();
                  let f = n.fog,
                    p = r.isMeshStandardMaterial ? n.environment : null,
                    m =
                      null === ec
                        ? ea.outputColorSpace
                        : !0 === ec.isXRRenderTarget
                        ? ec.texture.colorSpace
                        : i.Zr2,
                    h = (r.isMeshStandardMaterial ? v : u).get(r.envMap || p),
                    _ =
                      !0 === r.vertexColors &&
                      !!t.attributes.color &&
                      4 === t.attributes.color.itemSize,
                    g =
                      !!t.attributes.tangent &&
                      (!!r.normalMap || r.anisotropy > 0),
                    E = !!t.morphAttributes.position,
                    S = !!t.morphAttributes.normal,
                    T = !!t.morphAttributes.color,
                    M = i.y_p;
                  r.toneMapped &&
                    (null === ec || !0 === ec.isXRRenderTarget) &&
                    (M = ea.toneMapping);
                  let R =
                      t.morphAttributes.position ||
                      t.morphAttributes.normal ||
                      t.morphAttributes.color,
                    A = void 0 !== R ? R.length : 0,
                    C = c.get(r),
                    L = et.state.lights;
                  if (!0 === eb && (!0 === eC || e !== eu)) {
                    let n = e === eu && r.id === ed;
                    b.setState(r, e, n);
                  }
                  let U = !1;
                  r.version === C.__version
                    ? C.needsLights && C.lightsStateVersion !== L.state.version
                      ? (U = !0)
                      : C.outputColorSpace !== m
                      ? (U = !0)
                      : a.isBatchedMesh && !1 === C.batching
                      ? (U = !0)
                      : a.isBatchedMesh || !0 !== C.batching
                      ? a.isBatchedMesh &&
                        !0 === C.batchingColor &&
                        null === a.colorTexture
                        ? (U = !0)
                        : a.isBatchedMesh &&
                          !1 === C.batchingColor &&
                          null !== a.colorTexture
                        ? (U = !0)
                        : a.isInstancedMesh && !1 === C.instancing
                        ? (U = !0)
                        : a.isInstancedMesh || !0 !== C.instancing
                        ? a.isSkinnedMesh && !1 === C.skinning
                          ? (U = !0)
                          : a.isSkinnedMesh || !0 !== C.skinning
                          ? a.isInstancedMesh &&
                            !0 === C.instancingColor &&
                            null === a.instanceColor
                            ? (U = !0)
                            : a.isInstancedMesh &&
                              !1 === C.instancingColor &&
                              null !== a.instanceColor
                            ? (U = !0)
                            : a.isInstancedMesh &&
                              !0 === C.instancingMorph &&
                              null === a.morphTexture
                            ? (U = !0)
                            : a.isInstancedMesh &&
                              !1 === C.instancingMorph &&
                              null !== a.morphTexture
                            ? (U = !0)
                            : C.envMap !== h
                            ? (U = !0)
                            : !0 === r.fog && C.fog !== f
                            ? (U = !0)
                            : void 0 !== C.numClippingPlanes &&
                              (C.numClippingPlanes !== b.numPlanes ||
                                C.numIntersection !== b.numIntersection)
                            ? (U = !0)
                            : C.vertexAlphas !== _
                            ? (U = !0)
                            : C.vertexTangents !== g
                            ? (U = !0)
                            : C.morphTargets !== E
                            ? (U = !0)
                            : C.morphNormals !== S
                            ? (U = !0)
                            : C.morphColors !== T
                            ? (U = !0)
                            : C.toneMapping !== M
                            ? (U = !0)
                            : C.morphTargetsCount !== A && (U = !0)
                          : (U = !0)
                        : (U = !0)
                      : (U = !0)
                    : ((U = !0), (C.__version = r.version));
                  let w = C.currentProgram;
                  !0 === U && (w = e0(r, n, a));
                  let D = !1,
                    y = !1,
                    I = !1,
                    N = w.getUniforms(),
                    O = C.uniforms;
                  if (
                    (l.useProgram(w.program) && ((D = !0), (y = !0), (I = !0)),
                    r.id !== ed && ((ed = r.id), (y = !0)),
                    D || eu !== e)
                  ) {
                    l.buffers.depth.getReversed()
                      ? (eL.copy(e.projectionMatrix),
                        (0, i.xiE)(eL),
                        (0, i.Mmk)(eL),
                        N.setValue(eN, "projectionMatrix", eL))
                      : N.setValue(eN, "projectionMatrix", e.projectionMatrix),
                      N.setValue(eN, "viewMatrix", e.matrixWorldInverse);
                    let n = N.map.cameraPosition;
                    void 0 !== n &&
                      n.setValue(eN, eU.setFromMatrixPosition(e.matrixWorld)),
                      o.logarithmicDepthBuffer &&
                        N.setValue(
                          eN,
                          "logDepthBufFC",
                          2 / (Math.log(e.far + 1) / Math.LN2)
                        ),
                      (r.isMeshPhongMaterial ||
                        r.isMeshToonMaterial ||
                        r.isMeshLambertMaterial ||
                        r.isMeshBasicMaterial ||
                        r.isMeshStandardMaterial ||
                        r.isShaderMaterial) &&
                        N.setValue(
                          eN,
                          "isOrthographic",
                          !0 === e.isOrthographicCamera
                        ),
                      eu !== e && ((eu = e), (y = !0), (I = !0));
                  }
                  if (a.isSkinnedMesh) {
                    N.setOptional(eN, a, "bindMatrix"),
                      N.setOptional(eN, a, "bindMatrixInverse");
                    let e = a.skeleton;
                    e &&
                      (null === e.boneTexture && e.computeBoneTexture(),
                      N.setValue(eN, "boneTexture", e.boneTexture, d));
                  }
                  a.isBatchedMesh &&
                    (N.setOptional(eN, a, "batchingTexture"),
                    N.setValue(eN, "batchingTexture", a._matricesTexture, d),
                    N.setOptional(eN, a, "batchingIdTexture"),
                    N.setValue(eN, "batchingIdTexture", a._indirectTexture, d),
                    N.setOptional(eN, a, "batchingColorTexture"),
                    null !== a._colorsTexture &&
                      N.setValue(
                        eN,
                        "batchingColorTexture",
                        a._colorsTexture,
                        d
                      ));
                  let F = t.morphAttributes;
                  if (
                    ((void 0 !== F.position ||
                      void 0 !== F.normal ||
                      void 0 !== F.color) &&
                      P.update(a, t, w),
                    (y || C.receiveShadow !== a.receiveShadow) &&
                      ((C.receiveShadow = a.receiveShadow),
                      N.setValue(eN, "receiveShadow", a.receiveShadow)),
                    r.isMeshGouraudMaterial &&
                      null !== r.envMap &&
                      ((O.envMap.value = h),
                      (O.flipEnvMap.value =
                        h.isCubeTexture && !1 === h.isRenderTargetTexture
                          ? -1
                          : 1)),
                    r.isMeshStandardMaterial &&
                      null === r.envMap &&
                      null !== n.environment &&
                      (O.envMapIntensity.value = n.environmentIntensity),
                    y &&
                      (N.setValue(
                        eN,
                        "toneMappingExposure",
                        ea.toneMappingExposure
                      ),
                      C.needsLights &&
                        ((s = I),
                        (O.ambientLightColor.needsUpdate = s),
                        (O.lightProbe.needsUpdate = s),
                        (O.directionalLights.needsUpdate = s),
                        (O.directionalLightShadows.needsUpdate = s),
                        (O.pointLights.needsUpdate = s),
                        (O.pointLightShadows.needsUpdate = s),
                        (O.spotLights.needsUpdate = s),
                        (O.spotLightShadows.needsUpdate = s),
                        (O.rectAreaLights.needsUpdate = s),
                        (O.hemisphereLights.needsUpdate = s)),
                      f && !0 === r.fog && x.refreshFogUniforms(O, f),
                      x.refreshMaterialUniforms(
                        O,
                        r,
                        eE,
                        ev,
                        et.state.transmissionRenderTarget[e.id]
                      ),
                      eW.upload(eN, e1(C), O, d)),
                    r.isShaderMaterial &&
                      !0 === r.uniformsNeedUpdate &&
                      (eW.upload(eN, e1(C), O, d), (r.uniformsNeedUpdate = !1)),
                    r.isSpriteMaterial && N.setValue(eN, "center", a.center),
                    N.setValue(eN, "modelViewMatrix", a.modelViewMatrix),
                    N.setValue(eN, "normalMatrix", a.normalMatrix),
                    N.setValue(eN, "modelMatrix", a.matrixWorld),
                    r.isShaderMaterial || r.isRawShaderMaterial)
                  ) {
                    let e = r.uniformsGroups;
                    for (let n = 0, t = e.length; n < t; n++) {
                      let t = e[n];
                      V.update(t, w), V.bind(t, w);
                    }
                  }
                  return w;
                })(e, n, r, a, s);
              l.setMaterial(a, m);
              let _ = r.index,
                g = 1;
              if (!0 === a.wireframe) {
                if (void 0 === (_ = S.getWireframeAttribute(r))) return;
                g = 2;
              }
              let T = r.drawRange,
                M = r.attributes.position,
                R = T.start * g,
                A = (T.start + T.count) * g;
              null !== f &&
                ((R = Math.max(R, f.start * g)),
                (A = Math.min(A, (f.start + f.count) * g))),
                null !== _
                  ? ((R = Math.max(R, 0)), (A = Math.min(A, _.count)))
                  : null != M &&
                    ((R = Math.max(R, 0)), (A = Math.min(A, M.count)));
              let C = A - R;
              if (C < 0 || C === 1 / 0) return;
              y.setup(s, a, h, r, _);
              let L = U;
              if (
                (null !== _ && ((p = E.get(_)), (L = w).setIndex(p)), s.isMesh)
              )
                !0 === a.wireframe
                  ? (l.setLineWidth(a.wireframeLinewidth * eI()),
                    L.setMode(eN.LINES))
                  : L.setMode(eN.TRIANGLES);
              else if (s.isLine) {
                let e = a.linewidth;
                void 0 === e && (e = 1),
                  l.setLineWidth(e * eI()),
                  s.isLineSegments
                    ? L.setMode(eN.LINES)
                    : s.isLineLoop
                    ? L.setMode(eN.LINE_LOOP)
                    : L.setMode(eN.LINE_STRIP);
              } else
                s.isPoints
                  ? L.setMode(eN.POINTS)
                  : s.isSprite && L.setMode(eN.TRIANGLES);
              if (s.isBatchedMesh) {
                if (null !== s._multiDrawInstances)
                  L.renderMultiDrawInstances(
                    s._multiDrawStarts,
                    s._multiDrawCounts,
                    s._multiDrawCount,
                    s._multiDrawInstances
                  );
                else if (t.get("WEBGL_multi_draw"))
                  L.renderMultiDraw(
                    s._multiDrawStarts,
                    s._multiDrawCounts,
                    s._multiDrawCount
                  );
                else {
                  let e = s._multiDrawStarts,
                    n = s._multiDrawCounts,
                    t = s._multiDrawCount,
                    i = _ ? E.get(_).bytesPerElement : 1,
                    r = c.get(a).currentProgram.getUniforms();
                  for (let a = 0; a < t; a++)
                    r.setValue(eN, "_gl_DrawID", a), L.render(e[a] / i, n[a]);
                }
              } else if (s.isInstancedMesh) L.renderInstances(R, C, s.count);
              else if (r.isInstancedBufferGeometry) {
                let e =
                    void 0 !== r._maxInstanceCount
                      ? r._maxInstanceCount
                      : 1 / 0,
                  n = Math.min(r.instanceCount, e);
                L.renderInstances(R, C, n);
              } else L.render(R, C);
            }),
            (this.compile = function (e, n, t = null) {
              null === t && (t = e),
                (et = A.get(t)).init(n),
                er.push(et),
                t.traverseVisible(function (e) {
                  e.isLight &&
                    e.layers.test(n.layers) &&
                    (et.pushLight(e), e.castShadow && et.pushShadow(e));
                }),
                e !== t &&
                  e.traverseVisible(function (e) {
                    e.isLight &&
                      e.layers.test(n.layers) &&
                      (et.pushLight(e), e.castShadow && et.pushShadow(e));
                  }),
                et.setupLights();
              let i = new Set();
              return (
                e.traverse(function (e) {
                  if (!(e.isMesh || e.isPoints || e.isLine || e.isSprite))
                    return;
                  let n = e.material;
                  if (n) {
                    if (Array.isArray(n))
                      for (let r = 0; r < n.length; r++) {
                        let a = n[r];
                        ez(a, t, e), i.add(a);
                      }
                    else ez(n, t, e), i.add(n);
                  }
                }),
                er.pop(),
                (et = null),
                i
              );
            }),
            (this.compileAsync = function (e, n, i = null) {
              let r = this.compile(e, n, i);
              return new Promise((n) => {
                function i() {
                  if (
                    (r.forEach(function (e) {
                      c.get(e).currentProgram.isReady() && r.delete(e);
                    }),
                    0 === r.size)
                  ) {
                    n(e);
                    return;
                  }
                  setTimeout(i, 10);
                }
                null !== t.get("KHR_parallel_shader_compile")
                  ? i()
                  : setTimeout(i, 10);
              });
            });
          let eX = null;
          function eY() {
            eq.stop();
          }
          function eK() {
            eq.start();
          }
          let eq = new r();
          function ej(e, n, t, i) {
            if (!1 === e.visible) return;
            if (e.layers.test(n.layers)) {
              if (e.isGroup) t = e.renderOrder;
              else if (e.isLOD) !0 === e.autoUpdate && e.update(n);
              else if (e.isLight)
                et.pushLight(e), e.castShadow && et.pushShadow(e);
              else if (e.isSprite) {
                if (!e.frustumCulled || eA.intersectsSprite(e)) {
                  i && ew.setFromMatrixPosition(e.matrixWorld).applyMatrix4(eP);
                  let n = T.update(e),
                    r = e.material;
                  r.visible && en.push(e, n, r, t, ew.z, null);
                }
              } else if (
                (e.isMesh || e.isLine || e.isPoints) &&
                (!e.frustumCulled || eA.intersectsObject(e))
              ) {
                let n = T.update(e),
                  r = e.material;
                if (
                  (i &&
                    (void 0 !== e.boundingSphere
                      ? (null === e.boundingSphere && e.computeBoundingSphere(),
                        ew.copy(e.boundingSphere.center))
                      : (null === n.boundingSphere && n.computeBoundingSphere(),
                        ew.copy(n.boundingSphere.center)),
                    ew.applyMatrix4(e.matrixWorld).applyMatrix4(eP)),
                  Array.isArray(r))
                ) {
                  let i = n.groups;
                  for (let a = 0, o = i.length; a < o; a++) {
                    let o = i[a],
                      l = r[o.materialIndex];
                    l && l.visible && en.push(e, n, l, t, ew.z, o);
                  }
                } else r.visible && en.push(e, n, r, t, ew.z, null);
              }
            }
            let r = e.children;
            for (let e = 0, a = r.length; e < a; e++) ej(r[e], n, t, i);
          }
          function eQ(e, n, t, i) {
            let r = e.opaque,
              a = e.transmissive,
              o = e.transparent;
            et.setupLightsView(t),
              !0 === eb && b.setGlobalState(ea.clippingPlanes, t),
              i && l.viewport(ef.copy(i)),
              r.length > 0 && e$(r, n, t),
              a.length > 0 && e$(a, n, t),
              o.length > 0 && e$(o, n, t),
              l.buffers.depth.setTest(!0),
              l.buffers.depth.setMask(!0),
              l.buffers.color.setMask(!0),
              l.setPolygonOffset(!1);
          }
          function eZ(e, n, r, a) {
            if (null !== (!0 === r.isScene ? r.overrideMaterial : null)) return;
            void 0 === et.state.transmissionRenderTarget[a.id] &&
              (et.state.transmissionRenderTarget[a.id] = new i.nWS(1, 1, {
                generateMipmaps: !0,
                type:
                  t.has("EXT_color_buffer_half_float") ||
                  t.has("EXT_color_buffer_float")
                    ? i.ix0
                    : i.OUM,
                minFilter: i.$_I,
                samples: 4,
                stencilBuffer: X,
                resolveDepthBuffer: !1,
                resolveStencilBuffer: !1,
                colorSpace: i.ppV.workingColorSpace,
              }));
            let o = et.state.transmissionRenderTarget[a.id],
              l = a.viewport || ef;
            o.setSize(l.z, l.w);
            let s = ea.getRenderTarget();
            ea.setRenderTarget(o),
              ea.getClearColor(eh),
              (e_ = ea.getClearAlpha()) < 1 && ea.setClearColor(0xffffff, 0.5),
              ea.clear(),
              ey && L.render(r);
            let c = ea.toneMapping;
            ea.toneMapping = i.y_p;
            let u = a.viewport;
            if (
              (void 0 !== a.viewport && (a.viewport = void 0),
              et.setupLightsView(a),
              !0 === eb && b.setGlobalState(ea.clippingPlanes, a),
              e$(e, r, a),
              d.updateMultisampleRenderTarget(o),
              d.updateRenderTargetMipmap(o),
              !1 === t.has("WEBGL_multisampled_render_to_texture"))
            ) {
              let e = !1;
              for (let t = 0, o = n.length; t < o; t++) {
                let o = n[t],
                  l = o.object,
                  s = o.geometry,
                  c = o.material,
                  d = o.group;
                if (c.side === i.$EB && l.layers.test(a.layers)) {
                  let n = c.side;
                  (c.side = i.hsX),
                    (c.needsUpdate = !0),
                    eJ(l, r, a, s, c, d),
                    (c.side = n),
                    (c.needsUpdate = !0),
                    (e = !0);
                }
              }
              !0 === e &&
                (d.updateMultisampleRenderTarget(o),
                d.updateRenderTargetMipmap(o));
            }
            ea.setRenderTarget(s),
              ea.setClearColor(eh, e_),
              void 0 !== u && (a.viewport = u),
              (ea.toneMapping = c);
          }
          function e$(e, n, t) {
            let i = !0 === n.isScene ? n.overrideMaterial : null;
            for (let r = 0, a = e.length; r < a; r++) {
              let a = e[r],
                o = a.object,
                l = a.geometry,
                s = null === i ? a.material : i,
                c = a.group;
              o.layers.test(t.layers) && eJ(o, n, t, l, s, c);
            }
          }
          function eJ(e, n, t, r, a, o) {
            e.onBeforeRender(ea, n, t, r, a, o),
              e.modelViewMatrix.multiplyMatrices(
                t.matrixWorldInverse,
                e.matrixWorld
              ),
              e.normalMatrix.getNormalMatrix(e.modelViewMatrix),
              a.onBeforeRender(ea, n, t, r, e, o),
              !0 === a.transparent &&
              a.side === i.$EB &&
              !1 === a.forceSinglePass
                ? ((a.side = i.hsX),
                  (a.needsUpdate = !0),
                  ea.renderBufferDirect(t, n, r, a, e, o),
                  (a.side = i.hB5),
                  (a.needsUpdate = !0),
                  ea.renderBufferDirect(t, n, r, a, e, o),
                  (a.side = i.$EB))
                : ea.renderBufferDirect(t, n, r, a, e, o),
              e.onAfterRender(ea, n, t, r, a, o);
          }
          function e0(e, n, t) {
            !0 !== n.isScene && (n = eD);
            let i = c.get(e),
              r = et.state.lights,
              a = et.state.shadowsArray,
              o = r.state.version,
              l = M.getParameters(e, r.state, a, n, t),
              s = M.getProgramCacheKey(l),
              d = i.programs;
            (i.environment = e.isMeshStandardMaterial ? n.environment : null),
              (i.fog = n.fog),
              (i.envMap = (e.isMeshStandardMaterial ? v : u).get(
                e.envMap || i.environment
              )),
              (i.envMapRotation =
                null !== i.environment && null === e.envMap
                  ? n.environmentRotation
                  : e.envMapRotation),
              void 0 === d &&
                (e.addEventListener("dispose", ek),
                (d = new Map()),
                (i.programs = d));
            let f = d.get(s);
            if (void 0 !== f) {
              if (i.currentProgram === f && i.lightsStateVersion === o)
                return e3(e, l), f;
            } else
              (l.uniforms = M.getUniforms(e)),
                e.onBeforeCompile(l, ea),
                (f = M.acquireProgram(l, s)),
                d.set(s, f),
                (i.uniforms = l.uniforms);
            let p = i.uniforms;
            return (
              ((e.isShaderMaterial || e.isRawShaderMaterial) &&
                !0 !== e.clipping) ||
                (p.clippingPlanes = b.uniform),
              e3(e, l),
              (i.needsLights =
                e.isMeshLambertMaterial ||
                e.isMeshToonMaterial ||
                e.isMeshPhongMaterial ||
                e.isMeshStandardMaterial ||
                e.isShadowMaterial ||
                (e.isShaderMaterial && !0 === e.lights)),
              (i.lightsStateVersion = o),
              i.needsLights &&
                ((p.ambientLightColor.value = r.state.ambient),
                (p.lightProbe.value = r.state.probe),
                (p.directionalLights.value = r.state.directional),
                (p.directionalLightShadows.value = r.state.directionalShadow),
                (p.spotLights.value = r.state.spot),
                (p.spotLightShadows.value = r.state.spotShadow),
                (p.rectAreaLights.value = r.state.rectArea),
                (p.ltc_1.value = r.state.rectAreaLTC1),
                (p.ltc_2.value = r.state.rectAreaLTC2),
                (p.pointLights.value = r.state.point),
                (p.pointLightShadows.value = r.state.pointShadow),
                (p.hemisphereLights.value = r.state.hemi),
                (p.directionalShadowMap.value = r.state.directionalShadowMap),
                (p.directionalShadowMatrix.value =
                  r.state.directionalShadowMatrix),
                (p.spotShadowMap.value = r.state.spotShadowMap),
                (p.spotLightMatrix.value = r.state.spotLightMatrix),
                (p.spotLightMap.value = r.state.spotLightMap),
                (p.pointShadowMap.value = r.state.pointShadowMap),
                (p.pointShadowMatrix.value = r.state.pointShadowMatrix)),
              (i.currentProgram = f),
              (i.uniformsList = null),
              f
            );
          }
          function e1(e) {
            if (null === e.uniformsList) {
              let n = e.currentProgram.getUniforms();
              e.uniformsList = eW.seqWithValue(n.seq, e.uniforms);
            }
            return e.uniformsList;
          }
          function e3(e, n) {
            let t = c.get(e);
            (t.outputColorSpace = n.outputColorSpace),
              (t.batching = n.batching),
              (t.batchingColor = n.batchingColor),
              (t.instancing = n.instancing),
              (t.instancingColor = n.instancingColor),
              (t.instancingMorph = n.instancingMorph),
              (t.skinning = n.skinning),
              (t.morphTargets = n.morphTargets),
              (t.morphNormals = n.morphNormals),
              (t.morphColors = n.morphColors),
              (t.morphTargetsCount = n.morphTargetsCount),
              (t.numClippingPlanes = n.numClippingPlanes),
              (t.numIntersection = n.numClipIntersection),
              (t.vertexAlphas = n.vertexAlphas),
              (t.vertexTangents = n.vertexTangents),
              (t.toneMapping = n.toneMapping);
          }
          eq.setAnimationLoop(function (e) {
            eX && eX(e);
          }),
            "undefined" != typeof self && eq.setContext(self),
            (this.setAnimationLoop = function (e) {
              (eX = e),
                eB.setAnimationLoop(e),
                null === e ? eq.stop() : eq.start();
            }),
            eB.addEventListener("sessionstart", eY),
            eB.addEventListener("sessionend", eK),
            (this.render = function (e, n) {
              if (void 0 !== n && !0 !== n.isCamera) {
                console.error(
                  "THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera."
                );
                return;
              }
              if (!0 === eo) return;
              if (
                (!0 === e.matrixWorldAutoUpdate && e.updateMatrixWorld(),
                null === n.parent &&
                  !0 === n.matrixWorldAutoUpdate &&
                  n.updateMatrixWorld(),
                !0 === eB.enabled &&
                  !0 === eB.isPresenting &&
                  (!0 === eB.cameraAutoUpdate && eB.updateCamera(n),
                  (n = eB.getCamera())),
                !0 === e.isScene && e.onBeforeRender(ea, e, n, ec),
                (et = A.get(e, er.length)).init(n),
                er.push(et),
                eP.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse),
                eA.setFromProjectionMatrix(eP),
                (eC = this.localClippingEnabled),
                (eb = b.init(this.clippingPlanes, eC)),
                (en = R.get(e, ei.length)).init(),
                ei.push(en),
                !0 === eB.enabled && !0 === eB.isPresenting)
              ) {
                let e = ea.xr.getDepthSensingMesh();
                null !== e && ej(e, n, -1 / 0, ea.sortObjects);
              }
              ej(e, n, 0, ea.sortObjects),
                en.finish(),
                !0 === ea.sortObjects && en.sort(eS, eT),
                (ey =
                  !1 === eB.enabled ||
                  !1 === eB.isPresenting ||
                  !1 === eB.hasDepthSensing()) && L.addToRenderList(en, e),
                this.info.render.frame++,
                !0 === eb && b.beginShadows();
              let t = et.state.shadowsArray;
              C.render(t, e, n),
                !0 === eb && b.endShadows(),
                !0 === this.info.autoReset && this.info.reset();
              let i = en.opaque,
                r = en.transmissive;
              if ((et.setupLights(), n.isArrayCamera)) {
                let t = n.cameras;
                if (r.length > 0)
                  for (let n = 0, a = t.length; n < a; n++) eZ(i, r, e, t[n]);
                ey && L.render(e);
                for (let n = 0, i = t.length; n < i; n++) {
                  let i = t[n];
                  eQ(en, e, i, i.viewport);
                }
              } else
                r.length > 0 && eZ(i, r, e, n), ey && L.render(e), eQ(en, e, n);
              null !== ec &&
                (d.updateMultisampleRenderTarget(ec),
                d.updateRenderTargetMipmap(ec)),
                !0 === e.isScene && e.onAfterRender(ea, e, n),
                y.resetDefaultState(),
                (ed = -1),
                (eu = null),
                er.pop(),
                er.length > 0
                  ? ((et = er[er.length - 1]),
                    !0 === eb &&
                      b.setGlobalState(ea.clippingPlanes, et.state.camera))
                  : (et = null),
                ei.pop(),
                (en = ei.length > 0 ? ei[ei.length - 1] : null);
            }),
            (this.getActiveCubeFace = function () {
              return el;
            }),
            (this.getActiveMipmapLevel = function () {
              return es;
            }),
            (this.getRenderTarget = function () {
              return ec;
            }),
            (this.setRenderTargetTextures = function (e, n, i) {
              (c.get(e.texture).__webglTexture = n),
                (c.get(e.depthTexture).__webglTexture = i);
              let r = c.get(e);
              (r.__hasExternalTextures = !0),
                (r.__autoAllocateDepthBuffer = void 0 === i),
                r.__autoAllocateDepthBuffer ||
                  !0 !== t.has("WEBGL_multisampled_render_to_texture") ||
                  (console.warn(
                    "THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"
                  ),
                  (r.__useRenderToTexture = !1));
            }),
            (this.setRenderTargetFramebuffer = function (e, n) {
              let t = c.get(e);
              (t.__webglFramebuffer = n),
                (t.__useDefaultFramebuffer = void 0 === n);
            }),
            (this.setRenderTarget = function (e, n = 0, t = 0) {
              (ec = e), (el = n), (es = t);
              let i = !0,
                r = null,
                a = !1,
                o = !1;
              if (e) {
                let s = c.get(e);
                if (void 0 !== s.__useDefaultFramebuffer)
                  l.bindFramebuffer(eN.FRAMEBUFFER, null), (i = !1);
                else if (void 0 === s.__webglFramebuffer)
                  d.setupRenderTarget(e);
                else if (s.__hasExternalTextures)
                  d.rebindTextures(
                    e,
                    c.get(e.texture).__webglTexture,
                    c.get(e.depthTexture).__webglTexture
                  );
                else if (e.depthBuffer) {
                  let n = e.depthTexture;
                  if (s.__boundDepthTexture !== n) {
                    if (
                      null !== n &&
                      c.has(n) &&
                      (e.width !== n.image.width || e.height !== n.image.height)
                    )
                      throw Error(
                        "WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size."
                      );
                    d.setupDepthRenderbuffer(e);
                  }
                }
                let u = e.texture;
                (u.isData3DTexture ||
                  u.isDataArrayTexture ||
                  u.isCompressedArrayTexture) &&
                  (o = !0);
                let f = c.get(e).__webglFramebuffer;
                e.isWebGLCubeRenderTarget
                  ? ((r = Array.isArray(f[n]) ? f[n][t] : f[n]), (a = !0))
                  : (r =
                      e.samples > 0 && !1 === d.useMultisampledRTT(e)
                        ? c.get(e).__webglMultisampledFramebuffer
                        : Array.isArray(f)
                        ? f[t]
                        : f),
                  ef.copy(e.viewport),
                  ep.copy(e.scissor),
                  (em = e.scissorTest);
              } else
                ef.copy(eM).multiplyScalar(eE).floor(),
                  ep.copy(ex).multiplyScalar(eE).floor(),
                  (em = eR);
              if (
                (l.bindFramebuffer(eN.FRAMEBUFFER, r) &&
                  i &&
                  l.drawBuffers(e, r),
                l.viewport(ef),
                l.scissor(ep),
                l.setScissorTest(em),
                a)
              ) {
                let i = c.get(e.texture);
                eN.framebufferTexture2D(
                  eN.FRAMEBUFFER,
                  eN.COLOR_ATTACHMENT0,
                  eN.TEXTURE_CUBE_MAP_POSITIVE_X + n,
                  i.__webglTexture,
                  t
                );
              } else if (o) {
                let i = c.get(e.texture);
                eN.framebufferTextureLayer(
                  eN.FRAMEBUFFER,
                  eN.COLOR_ATTACHMENT0,
                  i.__webglTexture,
                  t || 0,
                  n || 0
                );
              }
              ed = -1;
            }),
            (this.readRenderTargetPixels = function (e, n, t, i, r, a, s) {
              if (!(e && e.isWebGLRenderTarget)) {
                console.error(
                  "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."
                );
                return;
              }
              let d = c.get(e).__webglFramebuffer;
              if (
                (e.isWebGLCubeRenderTarget && void 0 !== s && (d = d[s]), d)
              ) {
                l.bindFramebuffer(eN.FRAMEBUFFER, d);
                try {
                  let l = e.texture,
                    s = l.format,
                    c = l.type;
                  if (!o.textureFormatReadable(s)) {
                    console.error(
                      "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."
                    );
                    return;
                  }
                  if (!o.textureTypeReadable(c)) {
                    console.error(
                      "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type."
                    );
                    return;
                  }
                  n >= 0 &&
                    n <= e.width - i &&
                    t >= 0 &&
                    t <= e.height - r &&
                    eN.readPixels(n, t, i, r, D.convert(s), D.convert(c), a);
                } finally {
                  let e = null !== ec ? c.get(ec).__webglFramebuffer : null;
                  l.bindFramebuffer(eN.FRAMEBUFFER, e);
                }
              }
            }),
            (this.readRenderTargetPixelsAsync = async function (
              e,
              n,
              t,
              r,
              a,
              s,
              d
            ) {
              if (!(e && e.isWebGLRenderTarget))
                throw Error(
                  "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."
                );
              let u = c.get(e).__webglFramebuffer;
              if (
                (e.isWebGLCubeRenderTarget && void 0 !== d && (u = u[d]), u)
              ) {
                let d = e.texture,
                  f = d.format,
                  p = d.type;
                if (!o.textureFormatReadable(f))
                  throw Error(
                    "THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format."
                  );
                if (!o.textureTypeReadable(p))
                  throw Error(
                    "THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type."
                  );
                if (n >= 0 && n <= e.width - r && t >= 0 && t <= e.height - a) {
                  l.bindFramebuffer(eN.FRAMEBUFFER, u);
                  let e = eN.createBuffer();
                  eN.bindBuffer(eN.PIXEL_PACK_BUFFER, e),
                    eN.bufferData(
                      eN.PIXEL_PACK_BUFFER,
                      s.byteLength,
                      eN.STREAM_READ
                    ),
                    eN.readPixels(n, t, r, a, D.convert(f), D.convert(p), 0);
                  let o = null !== ec ? c.get(ec).__webglFramebuffer : null;
                  l.bindFramebuffer(eN.FRAMEBUFFER, o);
                  let d = eN.fenceSync(eN.SYNC_GPU_COMMANDS_COMPLETE, 0);
                  return (
                    eN.flush(),
                    await (0, i.jej)(eN, d, 4),
                    eN.bindBuffer(eN.PIXEL_PACK_BUFFER, e),
                    eN.getBufferSubData(eN.PIXEL_PACK_BUFFER, 0, s),
                    eN.deleteBuffer(e),
                    eN.deleteSync(d),
                    s
                  );
                }
                throw Error(
                  "THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range."
                );
              }
            }),
            (this.copyFramebufferToTexture = function (e, n = null, t = 0) {
              !0 !== e.isTexture &&
                ((0, i.mcG)(
                  "WebGLRenderer: copyFramebufferToTexture function signature has changed."
                ),
                (n = arguments[0] || null),
                (e = arguments[1]));
              let r = Math.pow(2, -t),
                a = Math.floor(e.image.width * r),
                o = Math.floor(e.image.height * r),
                s = null !== n ? n.x : 0,
                c = null !== n ? n.y : 0;
              d.setTexture2D(e, 0),
                eN.copyTexSubImage2D(eN.TEXTURE_2D, t, 0, 0, s, c, a, o),
                l.unbindTexture();
            });
          let e2 = eN.createFramebuffer(),
            e4 = eN.createFramebuffer();
          (this.copyTextureToTexture = function (
            e,
            n,
            t = null,
            r = null,
            a = 0,
            o = null
          ) {
            let s, u, f, p, m, h, _, g, v, E;
            !0 !== e.isTexture &&
              ((0, i.mcG)(
                "WebGLRenderer: copyTextureToTexture function signature has changed."
              ),
              (r = arguments[0] || null),
              (e = arguments[1]),
              (n = arguments[2]),
              (o = arguments[3] || 0),
              (t = null)),
              null === o &&
                (0 !== a
                  ? ((0, i.mcG)(
                      "WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."
                    ),
                    (o = a),
                    (a = 0))
                  : (o = 0));
            let S = e.isCompressedTexture ? e.mipmaps[o] : e.image;
            if (null !== t)
              (s = t.max.x - t.min.x),
                (u = t.max.y - t.min.y),
                (f = t.isBox3 ? t.max.z - t.min.z : 1),
                (p = t.min.x),
                (m = t.min.y),
                (h = t.isBox3 ? t.min.z : 0);
            else {
              let n = Math.pow(2, -a);
              (s = Math.floor(S.width * n)),
                (u = Math.floor(S.height * n)),
                (f = e.isDataArrayTexture
                  ? S.depth
                  : e.isData3DTexture
                  ? Math.floor(S.depth * n)
                  : 1),
                (p = 0),
                (m = 0),
                (h = 0);
            }
            null !== r
              ? ((_ = r.x), (g = r.y), (v = r.z))
              : ((_ = 0), (g = 0), (v = 0));
            let T = D.convert(n.format),
              M = D.convert(n.type);
            n.isData3DTexture
              ? (d.setTexture3D(n, 0), (E = eN.TEXTURE_3D))
              : n.isDataArrayTexture || n.isCompressedArrayTexture
              ? (d.setTexture2DArray(n, 0), (E = eN.TEXTURE_2D_ARRAY))
              : (d.setTexture2D(n, 0), (E = eN.TEXTURE_2D)),
              eN.pixelStorei(eN.UNPACK_FLIP_Y_WEBGL, n.flipY),
              eN.pixelStorei(
                eN.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
                n.premultiplyAlpha
              ),
              eN.pixelStorei(eN.UNPACK_ALIGNMENT, n.unpackAlignment);
            let x = eN.getParameter(eN.UNPACK_ROW_LENGTH),
              R = eN.getParameter(eN.UNPACK_IMAGE_HEIGHT),
              A = eN.getParameter(eN.UNPACK_SKIP_PIXELS),
              b = eN.getParameter(eN.UNPACK_SKIP_ROWS),
              C = eN.getParameter(eN.UNPACK_SKIP_IMAGES);
            eN.pixelStorei(eN.UNPACK_ROW_LENGTH, S.width),
              eN.pixelStorei(eN.UNPACK_IMAGE_HEIGHT, S.height),
              eN.pixelStorei(eN.UNPACK_SKIP_PIXELS, p),
              eN.pixelStorei(eN.UNPACK_SKIP_ROWS, m),
              eN.pixelStorei(eN.UNPACK_SKIP_IMAGES, h);
            let L = e.isDataArrayTexture || e.isData3DTexture,
              P = n.isDataArrayTexture || n.isData3DTexture;
            if (e.isDepthTexture) {
              let t = c.get(e),
                i = c.get(n),
                r = c.get(t.__renderTarget),
                d = c.get(i.__renderTarget);
              l.bindFramebuffer(eN.READ_FRAMEBUFFER, r.__webglFramebuffer),
                l.bindFramebuffer(eN.DRAW_FRAMEBUFFER, d.__webglFramebuffer);
              for (let t = 0; t < f; t++)
                L &&
                  (eN.framebufferTextureLayer(
                    eN.READ_FRAMEBUFFER,
                    eN.COLOR_ATTACHMENT0,
                    c.get(e).__webglTexture,
                    a,
                    h + t
                  ),
                  eN.framebufferTextureLayer(
                    eN.DRAW_FRAMEBUFFER,
                    eN.COLOR_ATTACHMENT0,
                    c.get(n).__webglTexture,
                    o,
                    v + t
                  )),
                  eN.blitFramebuffer(
                    p,
                    m,
                    s,
                    u,
                    _,
                    g,
                    s,
                    u,
                    eN.DEPTH_BUFFER_BIT,
                    eN.NEAREST
                  );
              l.bindFramebuffer(eN.READ_FRAMEBUFFER, null),
                l.bindFramebuffer(eN.DRAW_FRAMEBUFFER, null);
            } else if (0 !== a || e.isRenderTargetTexture || c.has(e)) {
              let t = c.get(e),
                i = c.get(n);
              l.bindFramebuffer(eN.READ_FRAMEBUFFER, e2),
                l.bindFramebuffer(eN.DRAW_FRAMEBUFFER, e4);
              for (let e = 0; e < f; e++)
                L
                  ? eN.framebufferTextureLayer(
                      eN.READ_FRAMEBUFFER,
                      eN.COLOR_ATTACHMENT0,
                      t.__webglTexture,
                      a,
                      h + e
                    )
                  : eN.framebufferTexture2D(
                      eN.READ_FRAMEBUFFER,
                      eN.COLOR_ATTACHMENT0,
                      eN.TEXTURE_2D,
                      t.__webglTexture,
                      a
                    ),
                  P
                    ? eN.framebufferTextureLayer(
                        eN.DRAW_FRAMEBUFFER,
                        eN.COLOR_ATTACHMENT0,
                        i.__webglTexture,
                        o,
                        v + e
                      )
                    : eN.framebufferTexture2D(
                        eN.DRAW_FRAMEBUFFER,
                        eN.COLOR_ATTACHMENT0,
                        eN.TEXTURE_2D,
                        i.__webglTexture,
                        o
                      ),
                  0 !== a
                    ? eN.blitFramebuffer(
                        p,
                        m,
                        s,
                        u,
                        _,
                        g,
                        s,
                        u,
                        eN.COLOR_BUFFER_BIT,
                        eN.NEAREST
                      )
                    : P
                    ? eN.copyTexSubImage3D(E, o, _, g, v + e, p, m, s, u)
                    : eN.copyTexSubImage2D(E, o, _, g, p, m, s, u);
              l.bindFramebuffer(eN.READ_FRAMEBUFFER, null),
                l.bindFramebuffer(eN.DRAW_FRAMEBUFFER, null);
            } else
              P
                ? e.isDataTexture || e.isData3DTexture
                  ? eN.texSubImage3D(E, o, _, g, v, s, u, f, T, M, S.data)
                  : n.isCompressedArrayTexture
                  ? eN.compressedTexSubImage3D(
                      E,
                      o,
                      _,
                      g,
                      v,
                      s,
                      u,
                      f,
                      T,
                      S.data
                    )
                  : eN.texSubImage3D(E, o, _, g, v, s, u, f, T, M, S)
                : e.isDataTexture
                ? eN.texSubImage2D(eN.TEXTURE_2D, o, _, g, s, u, T, M, S.data)
                : e.isCompressedTexture
                ? eN.compressedTexSubImage2D(
                    eN.TEXTURE_2D,
                    o,
                    _,
                    g,
                    S.width,
                    S.height,
                    T,
                    S.data
                  )
                : eN.texSubImage2D(eN.TEXTURE_2D, o, _, g, s, u, T, M, S);
            eN.pixelStorei(eN.UNPACK_ROW_LENGTH, x),
              eN.pixelStorei(eN.UNPACK_IMAGE_HEIGHT, R),
              eN.pixelStorei(eN.UNPACK_SKIP_PIXELS, A),
              eN.pixelStorei(eN.UNPACK_SKIP_ROWS, b),
              eN.pixelStorei(eN.UNPACK_SKIP_IMAGES, C),
              0 === o && n.generateMipmaps && eN.generateMipmap(E),
              l.unbindTexture();
          }),
            (this.copyTextureToTexture3D = function (
              e,
              n,
              t = null,
              r = null,
              a = 0
            ) {
              return (
                !0 !== e.isTexture &&
                  ((0, i.mcG)(
                    "WebGLRenderer: copyTextureToTexture3D function signature has changed."
                  ),
                  (t = arguments[0] || null),
                  (r = arguments[1] || null),
                  (e = arguments[2]),
                  (n = arguments[3]),
                  (a = arguments[4] || 0)),
                (0, i.mcG)(
                  'WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'
                ),
                this.copyTextureToTexture(e, n, t, r, a)
              );
            }),
            (this.initRenderTarget = function (e) {
              void 0 === c.get(e).__webglFramebuffer && d.setupRenderTarget(e);
            }),
            (this.initTexture = function (e) {
              e.isCubeTexture
                ? d.setTextureCube(e, 0)
                : e.isData3DTexture
                ? d.setTexture3D(e, 0)
                : e.isDataArrayTexture || e.isCompressedArrayTexture
                ? d.setTexture2DArray(e, 0)
                : d.setTexture2D(e, 0),
                l.unbindTexture();
            }),
            (this.resetState = function () {
              (el = 0), (es = 0), (ec = null), l.reset(), y.reset();
            }),
            "undefined" != typeof __THREE_DEVTOOLS__ &&
              __THREE_DEVTOOLS__.dispatchEvent(
                new CustomEvent("observe", { detail: this })
              );
        }
        get coordinateSystem() {
          return i.TdN;
        }
        get outputColorSpace() {
          return this._outputColorSpace;
        }
        set outputColorSpace(e) {
          this._outputColorSpace = e;
          let n = this.getContext();
          (n.drawingBufferColorspace = i.ppV._getDrawingBufferColorSpace(e)),
            (n.unpackColorSpace = i.ppV._getUnpackColorSpace());
        }
      }
    },
  },
]);
